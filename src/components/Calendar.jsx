// src/components/Calendar.jsx
import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import { FaChevronLeft, FaChevronRight, FaPlus, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Calendar = ({ events = [], onEventClick, onAddEvent }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('month'); // 'month', 'week', 'day'

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getEventsForDay = (day) => {
    return events.filter(event => 
      format(new Date(event.date), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Calendar Header */}
      <div className="p-6 border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold flex items-center">
              <FaCalendarAlt className="mr-3 text-blue-600" />
              School Calendar
            </h2>
            <div className="flex space-x-2">
              {['month', 'week', 'day'].map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-4 py-2 rounded-lg capitalize ${
                    view === v 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1))}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <FaChevronLeft />
            </button>
            
            <span className="text-xl font-semibold">
              {format(currentDate, 'MMMM yyyy')}
            </span>
            
            <button
              onClick={() => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1))}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <FaChevronRight />
            </button>

            <button
              onClick={onAddEvent}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              <FaPlus className="mr-2" />
              Add Event
            </button>
          </div>
        </div>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 border-b">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="p-4 text-center font-semibold text-gray-600">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7">
        {Array.from({ length: new Date(monthStart).getDay() }).map((_, i) => (
          <div key={`empty-${i}`} className="min-h-32 p-2 border-r border-b bg-gray-50"></div>
        ))}
        
        {days.map((day, i) => {
          const dayEvents = getEventsForDay(day);
          const isCurrentMonth = isSameMonth(day, currentDate);
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`min-h-32 p-2 border-r border-b hover:bg-gray-50 transition ${
                !isCurrentMonth ? 'bg-gray-50 text-gray-400' : ''
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className={`font-semibold ${
                  isToday(day) 
                    ? 'bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full'
                    : ''
                }`}>
                  {format(day, 'd')}
                </span>
                
                {dayEvents.length > 0 && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {dayEvents.length} events
                  </span>
                )}
              </div>

              {/* Events for the day */}
              <div className="space-y-1">
                {dayEvents.slice(0, 3).map((event, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    onClick={() => onEventClick?.(event)}
                    className={`text-xs p-2 rounded truncate cursor-pointer ${
                      event.type === 'academic' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'sports' ? 'bg-green-100 text-green-800' :
                      event.type === 'holiday' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    } hover:opacity-90`}
                  >
                    <div className="font-semibold">{event.title}</div>
                    <div className="text-xs opacity-75">{event.time}</div>
                  </motion.div>
                ))}
                
                {dayEvents.length > 3 && (
                  <div className="text-xs text-gray-500 text-center">
                    +{dayEvents.length - 3} more
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="p-4 border-t">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
            <span className="text-sm">Academic</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
            <span className="text-sm">Sports</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded mr-2"></div>
            <span className="text-sm">Holiday</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded mr-2"></div>
            <span className="text-sm">Other</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;