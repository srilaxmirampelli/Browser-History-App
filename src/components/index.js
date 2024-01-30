import './index.css'

import {Component} from 'react'

class History extends Component {
  onClickDeleteIcon = () => {
    const {historyDetails, deleteHistory} = this.props
    deleteHistory(historyDetails.id)
  }

  render() {
    const {historyDetails, deleteHistory} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = historyDetails
    return (
      <li className="each-history-card">
        <p className="time-accessed">{timeAccessed}</p>
        <li className="each-history-card-details">
          <li className="card-content">
            <img src={logoUrl} alt="domain logo" className="app-icon" />
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </li>
          <li className="delete-icon-container">
            <button className="delete-icon" type="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
                data-testid="delete"
                onClick={this.onClickDeleteIcon}
              />
            </button>
          </li>
        </li>
      </li>
    )
  }
}

export default History
