// User data
export const mockUser = {
  name: "Alok Kumar",
  avatar: "https://picsum.photos/seed/picsum/200/300",
  savingsGoal: 1200,
  currentSavings: 850
};

// Financial overview data
export const mockFinancialData = {
  monthly: {
    balance: 7849.52,
    income: 5200.00,
    expenses: 3400.00,
    savingsRatio: 0.35
  },
  quarterly: {
    balance: 23548.56,
    income: 15600.00,
    expenses: 10200.00,
    savingsRatio: 0.32
  },
  yearly: {
    balance: 94194.24,
    income: 62400.00,
    expenses: 40800.00,
    savingsRatio: 0.33
  }
};

// Income vs Expense chart data
export const mockIncomeExpenseData = [
  { month: 'Jan', income: 5200, expenses: 3500 },
  { month: 'Feb', income: 5200, expenses: 3700 },
  { month: 'Mar', income: 5200, expenses: 3000 },
  { month: 'Apr', income: 5400, expenses: 3200 },
  { month: 'May', income: 5400, expenses: 3400 },
  { month: 'Jun', income: 5400, expenses: 3600 },
];

// Category spending data
export const mockCategoryData = [
  { name: 'Housing', value: 1200, color: '#8884d8' },
  { name: 'Food', value: 800, color: '#82ca9d' },
  { name: 'Transportation', value: 400, color: '#ffc658' },
  { name: 'Entertainment', value: 300, color: '#ff8042' },
  { name: 'Utilities', value: 350, color: '#0088fe' },
  { name: 'Others', value: 350, color: '#00C49F' }
];

// Recent transactions data
export const mockTransactions = [
  { id: 1, date: '2025-05-15', description: 'Grocery Store', type: 'Debit', category: 'Food', amount: 78.35 },
  { id: 2, date: '2025-05-15', description: 'Monthly Salary', type: 'Credit', category: 'Income', amount: 5200 },
  { id: 3, date: '2025-05-14', description: 'Electric Bill', type: 'Debit', category: 'Utilities', amount: 145.20 },
  { id: 4, date: '2025-05-12', description: 'Restaurant Dinner', type: 'Debit', category: 'Food', amount: 64.80 },
  { id: 5, date: '2025-05-10', description: 'Gas Station', type: 'Debit', category: 'Transportation', amount: 45.00 },
  { id: 6, date: '2025-05-08', description: 'Movie Tickets', type: 'Debit', category: 'Entertainment', amount: 32.50 },
  { id: 7, date: '2025-05-05', description: 'Online Shopping', type: 'Debit', category: 'Others', amount: 128.75 },
  { id: 8, date: '2025-05-01', description: 'Rent Payment', type: 'Debit', category: 'Housing', amount: 1200 }
];