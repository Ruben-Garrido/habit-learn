import React from 'react'
import { DashboardLayout } from '../components/dashboard/DashboardLayout'
import { HabitList } from '../components/dashboard/HabitList'
import { ProgressSummary } from '../components/dashboard/ProgressSumary'
import { DailyLesson } from '../components/dashboard/DailyLesson'

export const Dashboard = () => {
  return (
    <>
    <DashboardLayout>
      <h2>Bienvenido</h2>
      <p>Aqui veras un resumen de tu progreso y habitos diarios</p>
      <ProgressSummary completed={5} total={5} />
      <DailyLesson />
      <HabitList></HabitList>
      
    </DashboardLayout>
    </>
  )
}
