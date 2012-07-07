module Jekyll
  module DateToOrdinalFilter
    safe true
    priority :low

    def date_to_ordinal(date)
      date = datetime(date)
      "#{date.strftime('%b')} #{ordinal(date.strftime('%e').to_i)}, #{date.strftime('%Y')}"
    end

    def datetime(date)
      if date.class == String
        date = Time.parse(date)
      end
      date
    end

    def ordinal(number)
      if (11..13).include?(number.to_i % 100)
        "#{number}th"
      else
        case number.to_i % 10
        when 1; "#{number}st"
        when 2; "#{number}nd"
        when 3; "#{number}rd"
        else    "#{number}th"
        end
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::DateToOrdinalFilter)