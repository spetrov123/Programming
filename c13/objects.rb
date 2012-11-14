class Objects

	def var=(v)
		@var = v #@var ||= "asdasd"
	end
	
	def var
		@var
	end
	
#	def method
#	puts "Something in method" 
#	end
#	
#	private
#	
#	def method_private
#		puts "Private!"
#	end
#	
#	def method_private2
#	
#	end
#	
#	public
#	
#	def method_public
#	
#	end
#end

o = Objects.new
# Ways to call method 
#o.method
#o.send("method")
#o.send "method"
#o.send :method
#o.send :method_private
p o.var
o.var = 10
p o.var
