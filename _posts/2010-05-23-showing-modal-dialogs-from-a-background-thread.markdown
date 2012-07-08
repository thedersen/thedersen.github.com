---
layout: post
title: Showing modal dialogs from a background thread
published: true
---

Showing a modal dialog on another thread than the main UI thread results for some in unexpected behavior. The dialog is not at all modal, and you have no control over where the dialog shows up. For a dialog to be shown properly, it must be opened on the UI thread. Sometimes, however, this is not always possible, especially if you have long running tasks that need user input during the operation.

<code>SynchronizationContext</code> to the rescue. Here’s what the documentation says:

>Provides the basic functionality for propagating a synchronization context in various synchronization models. The purpose of the synchronization model implemented by this class is to allow the internal asynchronous/synchronization operations of the common language runtime (CLR) to behave properly with different synchronization models. This model also simplifies some of the requirements that managed applications have had to follow in order to work correctly under different synchronization environments.

What this means is that you can use the <code>SynchronizationContext</code> class to dispatch a call to the right thread synchronously using <code>Send</code>, or asynchronously using <code>Post</code>.

Here is a simple example where we show a message box from a background worker using the <code>Send</code> method on the <code>SynchronizationContext</code> class. When we initialize the <code>Worker</code> class on line 15 we pass in <code>SynchronizationContext.Current</code> which holds the synchronization context for the current thread, i.e. the main UI thread. We then use this context to dispatch calls from the background worker to the UI thread, and the message box is properly shown.

{% highlight csharp linenos %}
public partial class Form : System.Windows.Forms.Form
{
    public Form()
    {
        InitializeComponent();
    }

    private void buttonStart_Click(object sender, EventArgs e)
    {
        StartAsyncJob();
    }

    private void StartAsyncJob()
    {
        var worker = new Worker(SynchronizationContext.Current);

        backgroundWorker.DoWork += (sender, e) => worker.DoWork();
        backgroundWorker.RunWorkerAsync();
    }
}

public class Worker
{
    private readonly SynchronizationContext _synchronizationContext;

    public Worker(SynchronizationContext synchronizationContext)
    {
        _synchronizationContext = synchronizationContext;
    }

    public void DoWork()
    {
        _synchronizationContext.Send(callback => MessageBox.Show("Hello from background worker!"), null);
    }
}
{% endhighlight %}

The full example application can be found [here](http://github.com/thedersen/Sandbox/tree/master/SynchronizationContext/).