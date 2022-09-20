import * as React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { Footer } from '../../../components/Footer'
import { Grid2Column } from '../../../components/UICore/Grid2Column'
import { H2 } from '../../../components/UICore/H2'
import { Header } from '../../../components/navigation/Header'
import { HeadingRegular } from '../../../components/UICore/HeadingRegular'
import { InsetCardContact } from '../../../components/InsetCardContact'
import { ProjectCodeInfo } from '../../../components/ProjectWithCodeInfo'
import { ResponsiveContainer } from 'recharts'
import { Spacer } from '../../../components/Spacer'
import { SubpageInfo } from '../../../components/SubpageInfo'
import { containerContentStyle, theme } from '../../../theme'
import { css } from '@emotion/css'
import { formatMoney } from '../../../helperFunctions'
import { urls } from '../../../urls'
import { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const styles = {
  inputStyle: css`
    display: block;
    font-size: ${theme.fontsize.text};
    line-height: ${theme.lineheight.text};
    margin: 20px;
    padding: 16px 16px 16px 50px;
    width: 420px;
    border-radius: 8px;
  `,
  inputContainerStyle: css`
    display: flex;
    align-items: center;
  `,
  headingTable: css`
    margin-top: 0;
    margin-bottom: 0;
    font-size: ${theme.fontsize.cards};
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.02em;
    display: flex;
    flex-direction: row;
  `,
  tableCellStyles: { fontSize: theme.fontsize.cards, fontFamily: theme.font.primary },
  tableHeaderStyles: {
    fontSize: theme.fontsize.cards,
    fontFamily: theme.font.primary,
    fontWeight: 600,
  },
}

const amountWithInflation = (amount: number, monthNumber: number, inflation: number) => {
  return amount * (1 + -inflation / 100) ** (monthNumber / 12) - 1
}

const calcMonthlyPayment = (amount: number, interest: number, years: number) => {
  return (amount * interest) / (1 - Math.pow(1 / (1 + interest), years * 12))
}

const calcValueIncrease = (order: number, inflation: number) =>
  Math.pow(1 + inflation / 100, order / 12)

const calculateAnnualPayment = (arg: {
  amount: number
  interest: number
  years: number
  inflation: number
}) => {
  const monthlyInterest = arg.interest / 100 / 12
  const months = arg.years * 12
  const monthlyPayment = calcMonthlyPayment(arg.amount, monthlyInterest, arg.years)

  const dataMortgage = [
    {
      order: 1,
      monthlyPayment: monthlyPayment,
      amount: arg.amount - (monthlyPayment - arg.amount * monthlyInterest),
      amountInflation: arg.amount - (monthlyPayment - arg.amount * monthlyInterest),
      monthlyPrincipal: monthlyPayment - arg.amount * monthlyInterest,
      monthlyPrincipalInflation: monthlyPayment - arg.amount * monthlyInterest,
      monthlyRatePayment: arg.amount * monthlyInterest,
      monthlyRatePaymentInflation: arg.amount * monthlyInterest,
      propertyValue: arg.amount * calcValueIncrease(1, arg.inflation),
    },
  ]

  Array.from({ length: months - 1 }).forEach((_, i) => {
    const order = i + 2 // +2 so the order starts at 2, bcs the first row is already in the array
    const amount =
      dataMortgage[i].amount - (monthlyPayment - dataMortgage[i].amount * monthlyInterest)
    const amountInflation = amountWithInflation(amount, i, arg.inflation)
    const monthlyRatePayment = dataMortgage[i].amount * monthlyInterest
    const monthlyRatePaymentInflation = amountWithInflation(monthlyRatePayment, i, arg.inflation)
    const monthlyPrincipal = monthlyPayment - dataMortgage[i].amount * monthlyInterest
    const monthlyPrincipalInflation = amountWithInflation(monthlyPrincipal, i, arg.inflation)
    const propertyValue = arg.amount * calcValueIncrease(i + 1, arg.inflation)
    dataMortgage.push({
      order,
      monthlyPayment,
      amount,
      amountInflation,
      monthlyRatePayment,
      monthlyRatePaymentInflation,
      monthlyPrincipal,
      monthlyPrincipalInflation,
      propertyValue,
    })
  })

  return dataMortgage
}

export const Mortgage = () => {
  const [amount, setAmount] = useState(100000)
  const [interest, setInterest] = useState(3.5)
  const [years, setYears] = useState(30)
  const [inflation, setInflation] = useState(2)
  const dataMortgage = calculateAnnualPayment({ amount, interest, years, inflation })

  return (
    <div>
      <Header />
      <div className={containerContentStyle} id='work'>
        <Grid2Column>
          <form>
            <HeadingRegular>Amount</HeadingRegular>
            <div className={styles.inputContainerStyle}>
              <input
                type='number'
                className={styles.inputStyle}
                value={amount}
                onChange={e => setAmount(+e.target.value)}
              />
              <HeadingRegular>€</HeadingRegular>
            </div>
            <HeadingRegular>Interest (yearly)</HeadingRegular>
            <div className={styles.inputContainerStyle}>
              <input
                type='number'
                className={styles.inputStyle}
                value={interest}
                onChange={e => setInterest(+e.target.value)}
              />
              <HeadingRegular>%</HeadingRegular>
            </div>
            <HeadingRegular>Years</HeadingRegular>
            <input
              type='number'
              className={styles.inputStyle}
              value={years}
              onChange={e => setYears(+e.target.value)}
            />
            <HeadingRegular>Inflation (per year)</HeadingRegular>
            <div className={styles.inputContainerStyle}>
              <input
                type='number'
                className={styles.inputStyle}
                value={inflation}
                onChange={e => setInflation(+e.target.value)}
              />
              <HeadingRegular>%</HeadingRegular>
            </div>
          </form>
          <div>
            <HeadingRegular>Your monthly payment</HeadingRegular>
            <H2 customStyle={{ marginTop: '32px' }}>
              {formatMoney(dataMortgage[0].monthlyPayment)}
            </H2>
          </div>
        </Grid2Column>
      </div>
      <FirstGraphComponent mortgageData={dataMortgage} />
      <SecondGraphComponent mortgageData={dataMortgage} />
      <MortgageTable mortgageData={dataMortgage} />
      <div id='about' />
      <ProjectCodeInfo
        title='Mortgage Calculator'
        description='This project was created as a part of IT-absolvent frontend ReactJS course. The
                purpose of the project was to create a simple web application that calculates monthly mortgage payment'
        client='IT-absolvent React Course'
        type='Portfolio project'
        year='2022'
        prevPageUrl={urls.ita.root}
        code='https://github.com/najmamat/portfolio/tree/main/src/routes/ita-course/mortgage'
      />
      <InsetCardContact />
      <Footer />
    </div>
  )
}

type dataMortgage = {
  order: number
  monthlyPayment: number
  amount: number
  amountInflation: number
  monthlyRatePayment: number
  monthlyRatePaymentInflation: number
  monthlyPrincipal: number
  monthlyPrincipalInflation: number
}

const MortgageTable = (props: { mortgageData: dataMortgage[] }) => {
  return (
    <div className={containerContentStyle}>
      <TableContainer
        component={Paper}
        sx={{
          height: 640,
        }}
      >
        <Table sx={{ minWidth: 650, height: 440 }} stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <div className={styles.headingTable}>Order</div>
              </TableCell>
              <TableCell sx={styles.tableHeaderStyles} align='right'>
                Payment&nbsp;(monthly)
              </TableCell>
              <TableCell sx={styles.tableHeaderStyles} align='right'>
                Amount&nbsp;(monthly)
              </TableCell>
              <TableCell sx={styles.tableHeaderStyles} align='right'>
                Interest&nbsp;(monthly)
              </TableCell>
              <TableCell sx={styles.tableHeaderStyles} align='right'>
                Principal&nbsp;(monthly)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.mortgageData.map(mortgage => (
              <TableRow key={mortgage.order}>
                <TableCell sx={styles.tableCellStyles} component='th' scope='row'>
                  {mortgage.order}
                </TableCell>
                <TableCell sx={styles.tableCellStyles} align='right'>
                  {formatMoney(mortgage.monthlyPayment)}
                </TableCell>
                <TableCell sx={styles.tableCellStyles} align='right'>
                  {formatMoney(mortgage.amount)}
                </TableCell>
                <TableCell sx={styles.tableCellStyles} align='right'>
                  {formatMoney(mortgage.monthlyRatePayment)}
                </TableCell>
                <TableCell sx={styles.tableCellStyles} align='right'>
                  {formatMoney(mortgage.monthlyPrincipal)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

const FirstGraphComponent = (props: { mortgageData: dataMortgage[] }) => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <LineChart
        data={props.mortgageData}
        margin={{
          top: 5,
          right: 110,
          left: 90,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          name='Monthly interest €'
          type='monotone'
          dataKey='monthlyRatePayment'
          stroke='#528C5B'
        />
        <Line
          name='Monthly interest with inflation €'
          type='monotone'
          dataKey='monthlyRatePaymentInflation'
          stroke='#8FBC90'
        />
        <Line
          name='Monthly principal €'
          type='monotone'
          dataKey='monthlyPrincipal'
          stroke='#4169E1'
        />
        <Line
          name='Monthly principal with inflation€'
          type='monotone'
          dataKey='monthlyPrincipalInflation'
          stroke='#ADD8E6'
        />
        <Line name='Monthly payment €' type='monotone' dataKey='monthlyPayment' stroke='#E17055' />
      </LineChart>
    </ResponsiveContainer>
  )
}

const SecondGraphComponent = (props: { mortgageData: dataMortgage[] }) => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <LineChart
        data={props.mortgageData}
        margin={{
          top: 40,
          right: 110,
          left: 90,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' name='Amount of loan to pay €' dataKey='amount' stroke='#f9c64e' />
        <Line
          type='monotone'
          name='Amount of loan to pay €'
          dataKey='amountInflation'
          stroke='#cc9f13'
        />
        <Line type='monotone' name='Property Value €' dataKey='propertyValue' stroke='#4169E1' />
      </LineChart>
    </ResponsiveContainer>
  )
}
