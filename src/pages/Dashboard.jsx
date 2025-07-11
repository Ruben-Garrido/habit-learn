import React from 'react'
import { DashboardLayout } from '../components/dashboard/DashboardLayout'
import { HabitList } from '../components/dashboard/HabitList'
import { ProgressSumary } from '../components/dashboard/ProgressSumary'

export const Dashboard = () => {
  return (
    <>
    <DashboardLayout>
      <h2>Bienvenido</h2>
      <p>Aqui veras un resumen de tu progreso y habitos diarios</p>
      <HabitList></HabitList>
      <ProgressSumary></ProgressSumary>
    </DashboardLayout>
    </>
  )
}
