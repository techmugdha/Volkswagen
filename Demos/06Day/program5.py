class Bank:
  
  rate_of_ineterest = 11.24
  
  @staticmethod
  def calculate_simple_ineterest(principle_amount,no_of_year):
    # self.principle_amount = principle_amount
    # self.no_of_year = no_of_year
    simple_interest = (principle_amount * no_of_year * Bank.rate_of_ineterest)
    print(simple_interest)
    
    
p_amt = float(input('Enter principle amount: '))
yr = int(input('Enter no of years: '))
Bank.rate_of_ineterest = float(input('Enter current rate of interest: '))
# b1 = Bank()
# b1.calculate_simple_ineterest(p_amt,yr)
Bank.calculate_simple_ineterest(p_amt,yr)

