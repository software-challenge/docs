require 'asciidoctor'
require 'erb'

guard 'shell' do
  watch(/^[^\.].*\.adoc$/) do |m|
    puts "updating #{m[0].inspect}"
    #Asciidoctor.convert_file(m[0], in_place: true, destination_dir: 'out')
    system 'bash generate.sh'
  end
end

guard 'livereload' do
  watch(/^.+\.(css|js|html)$/)
end
