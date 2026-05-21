import { useQuery } from "@tanstack/react-query";
import * as s from "./styles";
import { useEffect, useState } from "react";



function Restaurants() {
    const [restaurants, setRestaurants] = useState([]);
    const [refetch, setRefetch] = useState(true);

    useEffect(() => {
        if (refetch) {
            fetch("http://localhost:8080/api/restaurants")
                .then((response) => {
                    console.log(response);
                    response.json()
                        .then((responseBody) => {
                            console.log(responseBody);
                            setRestaurants(responseBody);
                        });
                });

        }

    }, [refetch]);





    // 캐싱을 위해 reactQuery를 사용
    // const restaurantsQuery = useQuery({
    //     queryKey: ["restaurants"],
    //     queryFn: async () => {
    //         const url = "http://localhost:8080/api/restaurants"
    //         const response = await fetch(url, {
    //             method: "GET",
    //         });
    //         const jsonData = await response.json();
    //         return jsonData;
    //     }
    // });

    // const restaurants = restaurantsQuery.data;
    // const isLoading = restaurantsQuery.isLoading;

    // console.log(isLoading);
    // console.log(restaurants);

    const emptyInputvalues = {
        restaurantName: "",
        category: "",
        address: "",
        rating: "",
    }

    const [inputValues, setInputValues] = useState(emptyInputvalues);



    const handleInputOnChange = (e) => {
        setInputValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }
    const handleRegisterOnClick = () => {

        const requestBody = JSON.stringify(inputValues);

        fetch("http://localhost:8080/api/restaurants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: requestBody,
        }).then((response) => {
            response.json()
                .then((responseBody) => {
                    alert(responseBody.message);
                    setRefetch(true)
                })
        });

    }



    return (
        <div css={s.table}>
            <div>
                <input type="text" name="restaurantName" placeholder="가게이름" value={inputValues.restaurantName} onChange={handleInputOnChange} />
                <input type="text" name="category" placeholder="카테고리" value={inputValues.category} onChange={handleInputOnChange} />
                <input type="text" name="address" placeholder="주소" value={inputValues.address} onChange={handleInputOnChange} />
                <input type="text" name="rating" placeholder="평점" value={inputValues.rating} onChange={handleInputOnChange} />
                <button onClick={handleRegisterOnClick}>등록</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>가게 이름</th>
                        <th>카테고리</th>
                        <th>주소</th>
                        <th>평점</th>
                        <th>개업 날짜</th>
                        <th>최소 주문금액</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        !isLoading && restaurants.map(restaurant => (
                            <tr>
                                <td>{restaurant.id}</td>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.category}</td>
                                <td>{restaurant.address}</td>
                                <td>{restaurant.rating}</td>
                                <td>{restaurant.created_at}</td>
                                <td>{restaurant.min_order_amount}</td>

                            </tr>
                        ))
                    } */}

                    {
                        restaurants.map(restaurant => (
                            <tr>
                                <td>{restaurant.id}</td>
                                <td>{restaurant.restaurantName}</td>
                                <td>{restaurant.category}</td>
                                <td>{restaurant.address}</td>
                                <td>{restaurant.rating}</td>
                                <td>{restaurant.created_at}</td>
                                <td>{restaurant.min_order_amount}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Restaurants;