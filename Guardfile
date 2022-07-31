#require 'asciidoctor'
require 'erb'

# don't rebuild repeatedly when multiple files change at once https://stackoverflow.com/a/36633220
LAST_REBUILD = Time.now
DEBOUNCE = 2 #seconds
guard 'shell' do
  watch(/^[^\.].*\.md$/) do |m|
    since_last = Time.now - LAST_REBUILD
    if since_last > DEBOUNCE
      puts "REBUILDING #{m[0].inspect}"
      #Asciidoctor.convert_file(m[0], in_place: true, destination_dir: 'out')
      system 'sh docs generate'
      LAST_REBUILD = Time.now
    end
  end
end

guard 'livereload' do
  watch(/^.+\.(css|js|html)$/)
end
