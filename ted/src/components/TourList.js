import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './LoadingPage'
import { Card } from 'antd'
const { Meta } = Card
const gridStyle = {
    display: 'inline-block',
    width: '50%',
    textAlign: 'center',
}
function TourList() {
    const [listData, setListData] = useState([])
    useEffect(() => {
        fetch('https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c')
            .then((res) => res.json())
            .then((result) => {
                setListData(result.data.XML_Head.Infos.Info)
            })
    }, [])
    return (
        <div>
            {' '}
            <div className="container">
                <h1>景點列表</h1>
                {listData.length ? (
                    <div>
                        {listData.map((item) => {
                            return (
                                <div key={item.Id}>
                                    <Link to={item.Id}>
                                        <Card style={gridStyle} cover={<img alt={item.Name} src={item.Picture1} />}>
                                            <Meta title={item.Name} />
                                        </Card>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    )
}

export default TourList
