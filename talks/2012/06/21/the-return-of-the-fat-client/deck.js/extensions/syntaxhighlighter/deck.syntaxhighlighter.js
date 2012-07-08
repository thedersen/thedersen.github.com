(function ($) {
    $("head").append(
    '<link href="<a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/styles/shCore.css">http://alexgorbatchev.com/pub/sh/current/styles/shCore.css</a>" rel="stylesheet" type="text/css" />'
    ).append(
    '<link href="<a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/styles/shThemeDefault.css">http://alexgorbatchev.com/pub/sh/current/styles/shThemeDefault.css</a>" rel="stylesheet" type="text/css" />'
    );
    function setupSyntaxHighlighterAutoloads() {
        console.log("calling SyntaxHighlighter");
        SyntaxHighlighter.autoloader(
              'applescript            <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushAppleScript.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushAppleScript.js</a>',
              'actionscript3 as3      <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushAS3.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushAS3.js</a>',
              'bash shell             <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushBash.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushBash.js</a>',
              'coldfusion cf          <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushColdFusion.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushColdFusion.js</a>',
              'cpp c                  <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushCpp.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushCpp.js</a>',
              'c# c-sharp csharp      <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushCSharp.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushCSharp.js</a>',
              'css                    <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushCss.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushCss.js</a>',
              'delphi pascal          <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushDelphi.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushDelphi.js</a>',
              'diff patch pas         <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushDiff.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushDiff.js</a>',
              'erl erlang             <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushErlang.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushErlang.js</a>',
              'groovy                 <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushGroovy.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushGroovy.js</a>',
              'java                   <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushJava.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushJava.js</a>',
              'jfx javafx             <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushJavaFX.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushJavaFX.js</a>',
              'js jscript javascript  <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushJScript.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushJScript.js</a>',
              'perl pl                <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushPerl.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushPerl.js</a>',
              'php                    <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushPhp.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushPhp.js</a>',
              'text plain             <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushPlain.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushPlain.js</a>',
              'py python              <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushPython.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushPython.js</a>',
              'ruby rails ror rb      <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushRuby.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushRuby.js</a>',
              'sass scss              <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushSass.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushSass.js</a>',
              'scala                  <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushScala.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushScala.js</a>',
              'sql                    <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushSql.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushSql.js</a>',
              'vb vbnet               <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushVb.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushVb.js</a>',
              'xml xhtml xslt html    <a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushXml.js">http://alexgorbatchev.com/pub/sh/current/scripts/shBrushXml.js</a>'
       );
       SyntaxHighlighter.all();
    }
    $.getScript('<a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shCore.js">http://alexgorbatchev.com/pub/sh/current/scripts/shCore.js</a>',
        function () {
            $.getScript('<a class="linkclass" href="http://alexgorbatchev.com/pub/sh/current/scripts/shAutoloader.js">http://alexgorbatchev.com/pub/sh/current/scripts/shAutoloader.js</a>', setupSyntaxHighlighterAutoloads);
    });
})(jQuery);