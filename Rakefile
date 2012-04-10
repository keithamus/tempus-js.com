require 'rubygems'
require 'rake'
require 'jekyll'


task :default => [:buildapi]

task :buildapi do
    api = Jekyll.configuration(Jekyll::DEFAULTS)['api']
    api.each do |functionGroup|
        functionGroup['functions'].each do |method|
            
            title = method['title']
            file = File.join(File.dirname(__FILE__), '/api/', title + '.md')

            if !FileTest.exist?(file)
                File.open(file, 'w') do |file|
                    file.write <<-EOS
---
layout: api
title: #{title}
permalink: #{title}/index.html
filename: api/#{title}.md
---
EOS
                end
            end
        end
    end
end