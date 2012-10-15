
require 'csv'

def do_work
	sum = 0
	CSV.foreach("/home/fail/programming/tech_of_prog/csv_hw1.csv") do |row|
		sum = sum + row[5].to_i
	end	
	p sum
end

do_work
