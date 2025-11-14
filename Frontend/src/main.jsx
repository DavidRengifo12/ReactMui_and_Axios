import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ButtonMui from './components/ButtonMui.jsx'
import ComboBox from './components/ComboBox.jsx'
import TableMui from './components/TableMui.jsx'
import CustomizedTables from './components/CustomizedTable.jsx'
import CardList from './components/CardList.jsx'
import Table2MUI from './components/Table2MUI.jsx'
import Register from './Register.jsx'
import ToastProvider from './components/ToastProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <br />
    <ButtonMui />
    <br />
    <ComboBox />
    <br />
    <TableMui />
    <br />
    <CustomizedTables />
    <br />
    <CardList />
    <br />
    <Table2MUI /> */}
    <ToastProvider />
    <Register />
  </StrictMode>,
)
