class Array
    alias :peek :last
end

stack = Array.new
while true

    line = gets.chomp

    while line.size > 0

       	if line =~ /^\s*([-+]?[0-9]*\.?[0-9]+)\s*/
            stack.push $1.to_f
        elsif line =~ /^\s*([\+\-\*\/])\s*/ then
            operator = $1

            operand_2 = stack.pop
            operand_1 = stack.pop
            
            stack.push case operator 
                when '+'
                    operand_1 + operand_2
                when '-'
                    operand_1 - operand_2
                when '*'
                    operand_1 * operand_2
                when '/'
                    operand_1 / operand_2
                end
        end

        line.sub!($&, "")
    end

    puts "Result = #{stack.peek}"
end