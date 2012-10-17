require 'csv'
require 'pathname'

def do_work
	$array = Array.new(30,0)
	for c in 1..29
		m = c.to_s + ".csv"
		if File.exists?(m)
			f = File.open(m, "r")
			content = f.read
			result = 0
			content.each_line do |line|
			l = line.to_i
			$array[l] = $array[l].to_i + 1
			end
		end
	end
end



def populqrnost
	nai_har = Array.new
	nai_ne_har = Array.new
	j = 0
	k = 0
	nai = $array[1]
	nai_har[0] = 1
	nai_ne = $array[1]
	nai_ne_har[0] = 1
	for h in 2..29
		if nai<$array[h]
			nai = $array[h]
			nai_har[j] = h
		else
			if nai == $array[h]
				j = j + 1
				nai_har[j] = h
			end
		end
		if nai_ne>$array[h]
			nai_ne = $array[h]
			nai_ne_har[k] = h
		else
			if nai_ne == $array[h]
				k = k + 1
				nai_ne_har[k] = h
			end
		end
	end

	for g in nai_har
		p "Nai-haresvaniqt chovek v tozi klas e #{g} nomer s #{nai} haresvaniq"
	end

	for g in nai_ne_har
		p "Nai-neharesvaniqt chovek v tozi klas e #{g} nomer s  #{nai_ne} haresvaniq"
	end


end

do_work
populqrnost			
