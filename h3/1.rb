
require 'csv'

def do_work
	sum_ruby = 0
	sum_python = 0
	CSV.foreach("/home/fail/programming/tech_of_prog/csv_hw1.csv") do |row|
		if row[5] == "Python"
			sum_python=sum_python+row[2].to_i
		elsif row[5] == "Ruby"
			sum_ruby=sum_ruby+row[2].to_i
		end
	end	
	p sum_ruby
	p sum_python
end

do_work
