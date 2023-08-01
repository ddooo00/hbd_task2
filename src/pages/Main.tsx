import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button, Input } from "antd";

const Main: React.FC<any> = () => {
  const [data, setData] = useState([]);
  const [contents, setContents] = useState<string>("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/boards");
      setData(response.data);
    } catch (error) {
      alert("데이터를 불러오는데 오류가 발생하였습니다.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBoardSubmit = async (e: any) => {
    e.preventDefault();

    // 이메일 가져오기
    await axios.post(`http://localhost:4000/boards`, {
      email: localStorage.getItem("email"),
      contents,
      isDeleted: false,
    });

    alert(
      "작성이 완료되었습니다. 아직 자동 새로고침이 불가하여 수동으로 갱신합니다."
    );
    window.location.reload();
  };

  const handleInputChange = (e: any) => {
    setContents(e.target.value);
  };

  return (
    <MainWrapper>
      <h1>메인 리스트 페이지</h1>
      <StyledForm onSubmit={handleBoardSubmit}>
        <StyledInput
          placeholder="방명록을 입력해주세요."
          value={contents}
          onChange={handleInputChange}
        />
      </StyledForm>
      <ListWrapper>
        {data.map((item: any, index) => (
          <ListItem key={item.id}>
            <span>
              {index + 1}. {item.contents}
            </span>
            {item.email === localStorage.getItem("email") && (
              <Button>삭제</Button>
            )}
          </ListItem>
        ))}
      </ListWrapper>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListWrapper = styled.div`
  width: 50%;
  padding: 10px;
`;

const ListItem = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled(Input)`
  width: 50%;
`;

const StyledForm = styled.form`
  width: 100%;
  text-align: center;
`;
