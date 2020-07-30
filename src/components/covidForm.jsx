import React from 'react';

class CovidForm extends React.Component {
  render() {
    const {
      totalCases, activeCases, criticalCases, totalDeaths,
      newDeaths, clickCovid,
    } = this.props;
    return (
      <div className="form">
        <div className="block-header">
          <h1>COVID 19</h1>
          <div className="logo"><img src="images/russia.png" alt="russia.png" /></div>
        </div>
        <p className="block-desc">
          <span>Статистика по заболеваемости коронавирусной инфекции</span>
        </p>
        <form>
          <input type="text" value={totalCases} readOnly />
          <div className="content-mobile">
            <table>
              <tbody>
                <tr>
                  <td>Активные</td>
                  <td>{activeCases}</td>
                </tr>
                <tr>
                  <td>Критические</td>
                  <td>{criticalCases}</td>
                </tr>
                <tr>
                  <td colSpan="2">Кол-во смертей</td>
                </tr>
                <tr>
                  <td>Всего</td>
                  <td>{totalDeaths}</td>
                </tr>
                <tr>
                  <td>Новые</td>
                  <td>{newDeaths}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="content-table">
            <table>
              <tbody>
                <tr className="header-caption">
                  <th>Всего</th>
                  <th>Активные</th>
                  <th>Критические</th>
                  <th colSpan="2">Умерло</th>
                </tr>
                <tr>
                  <td>{totalCases}</td>
                  <td>{activeCases}</td>
                  <td>{criticalCases}</td>
                  <td>всего</td>
                  <td>новые</td>
                </tr>

                <tr>
                  <td />
                  <td />
                  <td />
                  <td>{totalDeaths}</td>
                  <td>{newDeaths}</td>
                </tr>
                <tr />
              </tbody>
            </table>
          </div>
          <div className="controls"><button type="button" onClick={clickCovid}>ОБНОВИТЬ</button></div>
        </form>
      </div>
    );
  }
}

export default CovidForm;
