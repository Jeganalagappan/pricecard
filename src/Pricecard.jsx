import React from 'react'

function Pricecard({price}) {
    console.log(price)
    return <>
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{price.plan}</h5>
                <h6 className="card-price text-center">${price.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={price.isUser ? "" : "text-muted"}><span className="fa-li"><i className={price.isUser ? "fas fa-check" : "fas fa-times"}></i></span>{price.plan == "FREE" ? <>{price.user}</> : <strong>{price.user}</strong>}</li>
              <li className={price.isStorage ? "" : "text-muted"}><span className="fa-li"><i className={price.isStorage ? "fas fa-check": "fas fa-times"}></i></span>{price.storage} Storage</li>
              <li className={price.isPublicProjects ? "" : "text-muted"}><span className="fa-li"><i className={price.isPublicProjects ? "fas fa-check" : "fas fa-times"}></i></span>{price.publicProjects}</li>
              <li className={price.isCommunityAccess ? "" : "text-muted"}><span className="fa-li"><i className={price.isCommunityAccess ? "fas fa-check" : "fas fa-times"}></i></span>{price.communityAccess}</li>
              <li className={price.isPrivateProjects ? "" : "text-muted"}><span className="fa-li"><i className={price.isPrivateProjects ? "fas fa-check" : "fas fa-times"}></i></span>{price.privateProjects}</li>
              <li className={price.isPhoneSupport ? "" : "text-muted"}><span className="fa-li"><i className={price.isPhoneSupport ? "fas fa-check" : "fas fa-times"}></i></span>{price.phoneSupport}</li>
              <li className={price.isSubDomain ? "" : "text-muted"}><span className="fa-li"><i className={price.isSubDomain ? "fas fa-check" : "fas fa-times"}></i></span>{price.subDomain}</li>
              <li className={price.isReports ? "" : "text-muted"}><span className="fa-li"><i className={price.isReports ? "fas fa-check" : "fas fa-times"}></i></span>{price.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default Pricecard