import { useState, useEffect } from 'react';
import { 
  AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Search } from 'lucide-react';

// Import components
import Header from './Header';
import Sidebar from './Sidebar';
import FinancialCard from './FinancialCard';

// Import mock data
import { 
  mockUser, 
  mockFinancialData,
  mockIncomeExpenseData, 
  mockCategoryData, 
  mockTransactions 
} from '../Mockdata/mockFinancialData';

import { 
  mockNotifications, 
  mockBudgets 
} from '../Mockdata/mockNotifications';

// Main Dashboard Component
const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState('monthly');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState(mockTransactions);

  // Filter transactions based on search term
  useEffect(() => {
    const filtered = mockTransactions.filter(
      transaction => 
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  }, [searchTerm]);

  // Financial data based on selected timeframe
  const financialData = mockFinancialData[timeFrame];

  // Function to handle timeframe changes
  const handleTimeFrameChange = (frame) => {
    setTimeFrame(frame);
  };

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Toggle theme (light/dark mode)
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Pie chart click handler
  const handlePieClick = (data, index) => {
    setSelectedCategory(selectedCategory === data.name ? null : data.name);
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <Header 
        user={mockUser} 
        theme={darkMode ? 'dark' : 'light'} 
        toggleTheme={toggleTheme} 
        toggleSidebar={toggleSidebar}
        sidebarOpen={sidebarOpen}
      />
      
      <div className="flex flex-1 relative">
        <Sidebar isOpen={sidebarOpen} />
        
        <main className="flex-1 p-4 md:ml-64">
          {/* Welcome Section with Savings Goal */}
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-xl font-bold">Welcome back, {mockUser.name}!</h1>
                <p className="text-gray-500">Here's your financial overview for May 2025</p>
              </div>
              <div className="mt-4 md:mt-0 w-full md:w-1/3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Monthly Savings Goal</span>
                  <span>${mockUser.currentSavings} of ${mockUser.savingsGoal}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${(mockUser.currentSavings / mockUser.savingsGoal) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Time Frame Toggle */}
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Financial Overview</h2>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleTimeFrameChange('monthly')} 
                  className={`px-3 py-1 rounded text-sm ${timeFrame === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => handleTimeFrameChange('quarterly')} 
                  className={`px-3 py-1 rounded text-sm ${timeFrame === 'quarterly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  Quarterly
                </button>
                <button 
                  onClick={() => handleTimeFrameChange('yearly')} 
                  className={`px-3 py-1 rounded text-sm ${timeFrame === 'yearly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  Year-to-date
                </button>
              </div>
            </div>
          </div>
          
          {/* Financial Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <FinancialCard 
              title="Total Balance" 
              value={financialData.balance} 
              icon={<span className="text-blue-500">💰</span>} 
              timeFrame={timeFrame === 'monthly' ? 'month' : timeFrame === 'quarterly' ? 'quarter' : 'year'} 
              percentChange={3.5} 
            />
            <FinancialCard 
              title="Monthly Income" 
              value={financialData.income} 
              icon={<span className="text-green-500">💵</span>} 
              timeFrame={timeFrame === 'monthly' ? 'month' : timeFrame === 'quarterly' ? 'quarter' : 'year'} 
              percentChange={1.2} 
            />
            <FinancialCard 
              title="Monthly Expenses" 
              value={financialData.expenses} 
              icon={<span className="text-red-500">💳</span>} 
              timeFrame={timeFrame === 'monthly' ? 'month' : timeFrame === 'quarterly' ? 'quarter' : 'year'} 
              percentChange={-2.8} 
            />
            <FinancialCard 
              title="Savings Ratio" 
              value={financialData.savingsRatio} 
              icon={<span className="text-purple-500">📊</span>} 
              timeFrame={timeFrame === 'monthly' ? 'month' : timeFrame === 'quarterly' ? 'quarter' : 'year'} 
              percentChange={5.0} 
            />
          </div>
          
          {/* Charts Section */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"> */}
          <div className="grid lg:grid-rows-2 gap-6 mb-6">
            {/* Income vs Expense Chart */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold mb-4">Income vs Expenses</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={mockIncomeExpenseData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="income" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Income" />
                    <Area type="monotone" dataKey="expenses" stackId="2" stroke="#ff8042" fill="#ff8042" name="Expenses" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Category Spending Pie Chart */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold mb-4">Spending by Category</h3>
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={
                        selectedCategory 
                          ? mockCategoryData.filter(item => item.name === selectedCategory)
                          : mockCategoryData
                      }
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      onClick={handlePieClick}
                    >
                      {mockCategoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `$${value}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              {selectedCategory && (
                <div className="mt-2 text-center">
                  <span className="text-sm text-blue-500 cursor-pointer" onClick={() => setSelectedCategory(null)}>
                    Back to all categories
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {/* Transactions & Notifications Section */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> */}
          <div className="grid grid-cols-1 lg:grid-rows-1 gap-6">
            {/* Recent Transactions */}
            <div className="bg-white rounded-lg shadow p-4 lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Recent Transactions</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    className="pl-8 pr-4 py-1 border rounded-md text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search size={16} className="absolute left-2 top-2 text-gray-400" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredTransactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.description}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{transaction.category}</td>
                        <td className={`px-4 py-2 whitespace-nowrap text-sm font-medium ${transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}>
                          {transaction.type === 'Credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {filteredTransactions.length === 0 && (
                <div className="text-center py-4 text-gray-500">No transactions found</div>
              )}
            </div>
            
            {/* Notifications & Budgeting Assistant */}
            <div className="lg:col-span-1 space-y-6">
              {/* Notifications & Tips */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-4">Smart Insights</h3>
                <div className="space-y-3">
                  {mockNotifications.map(notification => (
                    <div key={notification.id} className={`p-3 rounded-lg text-sm ${
                      notification.type === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-400' : 
                      notification.type === 'success' ? 'bg-green-50 border-l-4 border-green-400' : 
                      'bg-blue-50 border-l-4 border-blue-400'}`}>
                      {notification.message}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Budgeting Assistant */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-4">Budget Tracker</h3>
                <div className="space-y-4">
                  {mockBudgets.map((budget, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{budget.category}</span>
                        <span>${budget.spent} of ${budget.budget}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            budget.spent / budget.budget > 1 ? 'bg-red-500' :
                            budget.spent / budget.budget > 0.8 ? 'bg-yellow-500' : 'bg-green-500'
                          }`} 
                          style={{ width: `${Math.min(budget.spent / budget.budget * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;