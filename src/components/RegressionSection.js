import React from 'react';
import './RegressionSection.css';

function RegressionSection({ regressionRef, scrollToSection, findingsRef }) {
  return (
    <section ref={regressionRef} className="section section-alt">
      <div className="container">
        <h2 className="section-title">Regression Analysis & Prediction Model</h2>
        {/* <p className="section-intro">
          Based on the EDA findings, we developed regression models to predict match rate using demographic data,
          swiping behavior, and messaging behavior.
        </p> */}

        <div className="regression-two-column">
          <div className="regression-column-left">
            {/* <h3>Model Definitions</h3>
            <div className="model-equations">
              <p><strong>Model 1:</strong> match_rate ~ user_age + gender + education</p>
              <p><strong>Model 2:</strong> match_rate ~ user_age + gender + education + swipe_likes + swipe_passes + ageFilterMin + ageFilterMax</p>
              <p><strong>Model 3:</strong> match_rate ~ user_age + gender + education + swipe_likes + swipe_passes + ageFilterMin + ageFilterMax + no_of_msgs_sent + no_of_msgs_received + nrOfConversations + longestConversation + percentOfOneMessageConversations</p>
            </div> */}

            <h4>Detailed Regression Coefficients</h4>
            <div className="table-wrapper">
              <table className="regression-table">
                <thead>
                  <tr>
                    <th>Variable</th>
                    <th>Model 1</th>
                    <th>Model 2</th>
                    <th>Model 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Intercept</strong></td>
                    <td>0.444***<br /><span className="std-error">(0.014)</span></td>
                    <td>0.641***<br /><span className="std-error">(0.062)</span></td>
                    <td>0.675***<br /><span className="std-error">(0.066)</span></td>
                  </tr>
                  <tr>
                    <td>ageFilterMax</td>
                    <td>—</td>
                    <td>—</td>
                    <td>0.000<br /><span className="std-error">(0.000)</span></td>
                  </tr>
                  <tr>
                    <td>ageFilterMin</td>
                    <td>—</td>
                    <td>—</td>
                    <td>-0.002<br /><span className="std-error">(0.001)</span></td>
                  </tr>
                  <tr>
                    <td>age_square</td>
                    <td>—</td>
                    <td>0.000<br /><span className="std-error">(0.000)</span></td>
                    <td>0.000<br /><span className="std-error">(0.000)</span></td>
                  </tr>
                  <tr>
                    <td>education[T.Has no high school or college education]</td>
                    <td>—</td>
                    <td>-0.008<br /><span className="std-error">(0.036)</span></td>
                    <td>-0.020<br /><span className="std-error">(0.037)</span></td>
                  </tr>
                  <tr>
                    <td>gender[T.M]</td>
                    <td>-0.359***<br /><span className="std-error">(0.008)</span></td>
                    <td>-0.579***<br /><span className="std-error">(0.041)</span></td>
                    <td>-0.569***<br /><span className="std-error">(0.041)</span></td>
                  </tr>
                  <tr>
                    <td>gender[T.M]:education[T.Has no high school or college education]</td>
                    <td>—</td>
                    <td>0.044**<br /><span className="std-error">(0.019)</span></td>
                    <td>0.040**<br /><span className="std-error">(0.019)</span></td>
                  </tr>
                  <tr>
                    <td>gender[T.M]:user_age</td>
                    <td>—</td>
                    <td>0.008***<br /><span className="std-error">(0.002)</span></td>
                    <td>0.008***<br /><span className="std-error">(0.002)</span></td>
                  </tr>
                  <tr>
                    <td>swipe_likes</td>
                    <td>—</td>
                    <td>—</td>
                    <td>-0.000**<br /><span className="std-error">(0.000)</span></td>
                  </tr>
                  <tr>
                    <td>swipe_passes</td>
                    <td>—</td>
                    <td>—</td>
                    <td>0.000<br /><span className="std-error">(0.000)</span></td>
                  </tr>
                  <tr>
                    <td>user_age</td>
                    <td>-0.002***<br /><span className="std-error">(0.001)</span></td>
                    <td>-0.010**<br /><span className="std-error">(0.004)</span></td>
                    <td>-0.010**<br /><span className="std-error">(0.004)</span></td>
                  </tr>
                  <tr>
                    <td>user_age:education[T.Has no high school or college education]</td>
                    <td>—</td>
                    <td>-0.001<br /><span className="std-error">(0.001)</span></td>
                    <td>-0.001<br /><span className="std-error">(0.001)</span></td>
                  </tr>
                  <tr className="separator-row">
                    <td colSpan="4"></td>
                  </tr>
                  <tr>
                    <td><strong>Observations</strong></td>
                    <td>951</td>
                    <td>951</td>
                    <td>951</td>
                  </tr>
                  <tr>
                    <td><strong>R²</strong></td>
                    <td>0.678</td>
                    <td>0.688</td>
                    <td>0.691</td>
                  </tr>
                  <tr>
                    <td><strong>Adjusted R²</strong></td>
                    <td>0.677</td>
                    <td>0.686</td>
                    <td>0.687</td>
                  </tr>
                  <tr>
                    <td><strong>Residual Std. Error</strong></td>
                    <td>0.085 (df=948)</td>
                    <td>0.084 (df=943)</td>
                    <td>0.083 (df=939)</td>
                  </tr>
                  <tr>
                    <td><strong>F Statistic</strong></td>
                    <td>996.597*** (df=2; 948)</td>
                    <td>297.312*** (df=7; 943)</td>
                    <td>190.502*** (df=11; 939)</td>
                  </tr>
                </tbody>
              </table>
              <div className="table-note">
                <strong>Note:</strong> *p&lt;0.1, **p&lt;0.05, ***p&lt;0.01
              </div>
            </div>
          </div>

          <div className="regression-column-right">
            <h4>Model Performance Comparison</h4>
            <div className="table-wrapper">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Coefficients</th>
                    <th>RMSE</th>
                    <th>R-squared</th>
                    <th>R-squared-adjusted</th>
                    <th>BIC</th>
                    <th>AIC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>3.0</td>
                    <td>0.096680</td>
                    <td>0.704583</td>
                    <td>0.703691</td>
                    <td>-1466.000002</td>
                    <td>-1479.499364</td>
                  </tr>
                  <tr className="highlight-row">
                    <td>2</td>
                    <td>8.0</td>
                    <td>0.095856</td>
                    <td>0.714691</td>
                    <td>0.711651</td>
                    <td>-1456.652803</td>
                    <td>-1492.651099</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>12.0</td>
                    <td>0.095700</td>
                    <td>0.717351</td>
                    <td>0.712596</td>
                    <td>-1436.896655</td>
                    <td>-1490.894099</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4>Model Validation Results</h4>
            <div className="table-wrapper">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Model 1</th>
                    <th>Model 2</th>
                    <th>Model 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Average RMSE test</strong></td>
                    <td>0.084704</td>
                    <td>0.084061</td>
                    <td>0.084022</td>
                  </tr>
                  <tr>
                    <td>Fold1</td>
                    <td>0.094554</td>
                    <td>0.093493</td>
                    <td>0.09342</td>
                  </tr>
                  <tr>
                    <td>Fold2</td>
                    <td>0.09302</td>
                    <td>0.095382</td>
                    <td>0.095379</td>
                  </tr>
                  <tr>
                    <td>Fold3</td>
                    <td>0.078259</td>
                    <td>0.076484</td>
                    <td>0.07606</td>
                  </tr>
                  <tr>
                    <td>Fold4</td>
                    <td>0.062197</td>
                    <td>0.059778</td>
                    <td>0.060348</td>
                  </tr>
                  <tr>
                    <td>Fold5</td>
                    <td>0.09549</td>
                    <td>0.095168</td>
                    <td>0.094907</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="model-conclusion">
              <strong>Men have a match rate that is 56.9% lower than that of women</strong>. For women, for every 1-year increase in age, a woman's match rate decreases by 1%. For men, the effect of age is the sum of user_age and the interaction term gender[T.M]:user_age, which is (-0.010 + 0.008) = -0.002. This shows that age has a small but statistically significant negative impact on women's match rates; <strong>for men, this negative effect is almost entirely canceled out</strong>.
            </p>

          </div>
        </div>


      </div>
    </section>
  );
}

export default RegressionSection;

