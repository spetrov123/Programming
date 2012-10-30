# da se sabere vremet za testove s vreme > 5
require 'csv'

sum = 0.0
output_file = "output"+"feature_scenarios_times.csv"

CSV.open("new_file", "w") do |csv|
	CSV.foreach("/home/fail/izpit_2/feature_scenarios_times.csv") do |row|
		if (row[0].to_f > 5)
			sum = sum + row[0].to_f	
		end
		csv << [sum]
	end
end
p sum


