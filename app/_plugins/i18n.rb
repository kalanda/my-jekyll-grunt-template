require 'jekyll/multiple/languages/plugin'

module Jekyll
  class LocalizeLoopTag < Liquid::Block
    def initialize(tag_name, markup, tokens)
       super
       @key = markup.to_s.strip
    end
  
    def render(context)
      translation = Jekyll::LocalizeTag.new("", @key, "").render(context)
      result = []
      context.stack do
        translation.each do |item|
          context['translateItem'] = item
          result << render_all(@nodelist, context)
        end
      end
      result
    end
  end
end

Liquid::Template.register_tag('translateList', Jekyll::LocalizeLoopTag)