import React from 'react';
import { useParams } from 'react-router-dom';

import TopicName from '../components/topicName';

const insurancePolicy = require('../../images/insurancePolicy.jpg');
const mutualfunds = require('../../images/mutualfunds.jpg');
const stockMarket = require('../../images/stockMarket.jpg');
const savings = require('../../images/savings.jpg')
const commodities = require('../../images/commodities.jpg')
const digitalGold = require('../../images/digitalGold.jpg')
const fixedAssets = require('../../images/fixedAssets.jpeg')
const fixedDeposits = require('../../images/fixedDeposits.jpg')


const TOPIC_DETAILS = [
    {
        id: 'mutual-funds',
        title: 'MUTUAL FUNDS',
        image: mutualfunds,
        mainContent: 'A mutual fund is a company that pools money from many investors and invests the money in securities such as stocks, bonds, and short-term debt. The combined holdings of the mutual fund are known as its portfolio. Investors buy shares in mutual funds. There are three types of Mutual Funds - <ol> <li>Equity Funds</li> <li>Debt Funds</li> <li>Money Market Funds </li> </ol>. <br> Here are some tips to pick best Mutual Funds - <ul> <li>Consider your investing goals and risk tolerance</li><li>Know the fund’s management style: Is it active or passive?</li><li>Understand the differences between fund types</li><li>Look out for high fees</li><li>Do your research and evaluate past performance</li><li>Remember to diversify your portfolio</li><li>Stay focused on long-term growth</li></ul>',
        additionalContent: [{id:1, display:'CRISIL', link:'https://www.crisil.com/en/home/what-we-do/financial-products/mf-ranking.html'}, 
        {id:2, display:'Funds India', link:'https://www.fundsindia.com/select-funds'}, 
        {id:3, display:'Policy Bazaar', link:'https://investmentlife.policybazaar.com/prequote-ulip?offerid=36&utm_source=google&utm_medium=cpc&utm_term=top%20mutual%20funds%20in%20india&utm_campaign=Investment_Domestic_ULIP_Kolkata_Exact00Mutual_Funds&gclid=Cj0KCQiAveebBhD_ARIsAFaAvrEZFJSImjiDD9NU4vTWAGkzrLddq14CJkAA1FhJy8EuE-SyTvLSZSQaApdLEALw_wcB'},
        {id:4, display:'Money Control', link:'https://www.moneycontrol.com/mutual-funds/best-funds/equity.html'},
        {id:5, display:'Paytm', link:'https://www.paytmmoney.com/mutual-funds/best-return-funds'}]
    },
    {
        id: 'insurance-plans',
        title: 'INSURANCE PLANS',
        image: insurancePolicy,
        mainContent: 'Insurance is a financial safety net, helping you and your loved ones recover after something bad happens — such as a fire, theft, lawsuit or car accident. When you purchase insurance, you’ll receive an insurance policy, which is a legal contract between you and your insurance provider. And when you suffer a loss that’s covered by your policy and file a claim, insurance pays you or a designated recipient, called a beneficiary, based on the terms of your policy. The most difficult thing about insurance is that you’re paying for something you hope you never have to use. Nobody wants something bad to happen to them. But suffering a loss without insurance can put you in a difficult financial situation. <br><br> How do I choose an insurance provider? <ul> <li>Insurance coverage</li> <li>Financial strength</li> <li>Agency model</li> <li>Customer service</li> </ul>',
        additionalContent: [{id:1, display:'LIC India', link:'https://licindia.in/Products/Insurance-Plan'}, 
        {id:2, display:'SBI Life', link:'https://www.sbilife.co.in/'}, 
        {id:3, display:'Department of Financial Services', link:'https://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes'},
        {id:4, display:'Policy Bazaar', link:'https://termlife.policybazaar.com/?offerid=201&pb_source=google&pb_medium=cpc&pb_term=Insurance%20plans%20in%20india&pb_campaign=Search_Generic_Exact_Conv00Best_Insurance_Plan&gclid=Cj0KCQiAj4ecBhD3ARIsAM4Q_jHQhdxtPngnRm5_8ld3Q2kJGOxnylN3B3lrNSvpysSS8Lt34_PHk1UaAlfOEALw_wcB'},
        {id:5, display:'Max Life Insurance', link:'https://www.maxlifeinsurance.com/life-insurance-plans'}]
    },
    {
        id: 'equity-stocks',
        title: 'EQUITY AND STOCKS',
        image: stockMarket,
        mainContent: 'The equity meaning in share market is nothing but these shares which investors can buy or sell. The equity market is also called a stock market where traders buy or sell shares. The companies listed on exchanges offer a fraction of their equity to public investors. <br> One of the best ways for beginners to learn how to invest in stocks is to put money in an online investment account, which can then be used to invest in shares of stock or stock mutual funds. With many brokerage accounts, you can start investing for the price of a single share.',
        additionalContent: [{id:1, display:'Groww', link:'https://groww.in/'}, 
        {id:2, display:'Zerodha', link:'https://zerodha.com/'}, 
        {id:3, display:'IIFL', link:'https://www.thebeststockbroker.com/india-infoline-review/'},
        {id:4, display:'Angel One', link:'https://5minwebsite.angelbroking.com/'},
        {id:5, display:'ICICI Direct', link:'https://www.thebeststockbroker.com/icici-direct-review/'}]
    },
    {
        id: 'savings-deposits',
        title: 'Savings Deposits',
        image: savings,
        mainContent: 'Savings Account is a deposit account opened at a bank or a financial institution that offers a moderate interest rate on the deposit amount. Different banks offer different interest rates varying from 2%-4%. Also, a savings account is the most liquid form of investment with immediate redemption. Thus, it is as good as having cash in hand but stored in a safe place. Moreover, a savings account is a risk-free instrument and the interest earned is assured. The interest earned on a savings account is tax-free till Rs 10,000 under Section 80TTA. However, this interest income beyond the threshold limit is taxable as per the individual’s tax slab.',
        additionalContent: [{id:1, display:'SBI', link:'https://sbi.co.in/web/personal-banking/accounts/saving-account/savings-bank-account'}, 
        {id:2, display:'HDFC', link:'https://www.hdfcbank.com/personal/save/accounts/savings-accounts/regular-savings-accounts'}, 
        {id:3, display:'ICICI', link:'https://www.icicibank.com/personal-banking/accounts/savings-account'},
        {id:4, display:'Post Office', link:'https://www.indiapost.gov.in/Financial/pages/content/post-office-saving-schemes.aspx'},
        {id:5, display:'Bank Banzaar', link:'https://www.bankbazaar.com/savings-account.html'}]
    },
    {
        id: 'commodities',
        title: 'Commodities',
        image: commodities,
        mainContent: 'The legal entity that decides, regulates and enforces the rules and procedures for trading commodities, such as the standardised commodity contracts, and other related investment products is the commodities exchange. It is an organised market where various commodities and derivatives are traded. In India, one can trade commodities by going on any of the 20+ exchanges which facilitate this trade under the regulatory eye of the Securities and Exchange Board of India. Till 2015, the market was regulated by the Forward Markets Commission which was finally merged with SEBI to create a unified regulatory environment for commercial investing. To start trading in commodities, you will need a Demat account, Trading account and a Bank account. The Demat account will function as a keeper of all your trades and holdings but you will still need to go through a good broker to place orders on the exchanges.',
        additionalContent: [{id:1, display:'National Stock Exchange (NSE)', link:'https://www.nseindia.com/'}, 
        {id:2, display:'National Commodity and Derivative Exchange (NCDEX)', link:'https://www.ncdex.com/'}, 
        {id:3, display:'Multi Commodity Exchange of India (MCX)', link:'https://www.thebeststockbroker.com/india-infoline-review/'},
        {id:4, display:'Indian Commodity Exchange (ICEX)', link:'https://www.icexindia.com/'},
        {id:5, display:'Bombay Stock Exchange (BSE)', link:'https://www.bseindia.com/'}]
    },
    {
        id: 'digital-gold',
        title: 'Digital Gold',
        image: digitalGold,
        mainContent: 'Digital gold is a method by which you can invest in the yellow metal in small fractions anytime and anywhere with the convenience of digital access to the commodity. The various forms of investing in digital gold include buying: <ul><li>Sovereign Gold Bonds (SGBs)</li><li>Gold Exchange-Traded Funds (ETFs)</li><li>MCX Gold Contracts</li><li>Digital Gold Organizations</li></ul>',
        additionalContent: [{id:1, display:'Tanishq', link:'https://www.tanishq.co.in/digigold/home'}, 
        {id:2, display:'Axis Bank', link:'https://www.axisbank.com/retail/investment/digital-gold/overview'}, 
        {id:3, display:'Aditya Birla Capital', link:'https://wealth.adityabirlacapital.com/digital-gold/'},
        {id:4, display:'Caratlane', link:'https://www.caratlane.com/tanishq-digi-gold'},
        {id:5, display:'Paytm', link:'https://paytm.com/digitalgold'}]
    },
    {
        id: 'fixed-assets',
        title: 'Fixed Assets',
        image: fixedAssets,
        mainContent: 'Fixed assets are the long term tangible assets that are used by business in generating income. Fixed assets provide the firm with long term financial gain as they have a useful life of more than one year. Fixed assets are also known as capital assets and are denoted by the term Property, Plant and Equipment in the balance sheet. Fixed assets cannot be easily converted into cash. Example of fixed assets - <ul><li>PPE (Property, Plant, and Equipment)</li> <li>Land</li> <li>Buildings</li> <li>Vehicles</li> <li>Furniture</li> <li>Machinery</li></ul>',
        additionalContent: [{id:1, display:'Investopedia', link:'https://www.investopedia.com/ask/answers/032715/what-are-some-examples-fixed-assets.asp'}, 
        {id:2, display:'MCA', link:'https://www.mca.gov.in/Ministry/notification/pdf/AS_10.pdf'}, 
        {id:3, display:'Clear Tax', link:'https://cleartax.in/s/as-10-property-plant-equipment'}]
    },
    {
        id: 'fixed-deposits-ppf',
        title: 'Fixed Deposits',
        image: fixedDeposits,
        mainContent: 'Fixed Deposit is a financial instrument offered by banks, post offices and NBFCs. The interest rates that a Bank Fixed Deposit offers are higher than the regular savings account. As the name suggests, the deposit amount and the interest rate are fixed throughout the tenure of the Bank FD. Currently, the bank FDs offer interest rates between 3%-6%, which does not change irrespective of the market volatility. Moreover, investors can also opt for tax-saving fixed deposits that can help them save tax under Section 80C up to Rs.1.5 lakhs. [PPF]',
        additionalContent: [{id:1, display:'NSI India', link:'https://cleartax.in/s/as-10-property-plant-equipment'}, 
        {id:2, display:'Bank Bazaar', link:'https://www.bankbazaar.com/saving-schemes/ppf.html'}, 
        {id:3, display:'Groww', link:'https://www.bankbazaar.com/saving-schemes/ppf.html'},
        {id:4, display:'Axis Bank', link:'https://www.axisbank.com/retail/deposits/fixed-deposits/features-benefits'},
        {id:5, display:'SBI', link:'https://sbi.co.in/web/personal-banking/investments-deposits/govt-schemes/ppf'}]
    }
]

const TopicPages = () => {
    const topicId = useParams().topicId;
    const loadedTopics = TOPIC_DETAILS.filter(topics => topics.id === topicId);
    return <TopicName items={loadedTopics} />;
  };
  
  export default TopicPages;