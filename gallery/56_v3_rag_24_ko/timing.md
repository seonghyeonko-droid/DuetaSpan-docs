# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 소설을 읽다가 듀 플레시라는 성함을 봤는데… 묘하게 흥미롭더라고요. 그 성은 어디에서 유래한 걸까요?
     6.92s  <ret> 발화 (turn1 첫 프레임)
     7.07s  agent 발화 시작: <ret> 좋은 질문이세요. 성은 종종 이야기를 들려주기도 하니까요.
     7.32s  user  발화 끝
     8.68s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.74s]: Du Plessis is a French surname originating in the historical province 
    10.79s  agent 발화 시작: 듀 플레시 성은 프랑스의 푸아투 지방에서 유래했는데, ‘영주의 저택’이라는 뜻이래요.
    10.81s  agent 발화 끝
    16.20s  agent 발화 끝
    17.74s  user  발화 시작: 푸아투… 지금도 프랑스에 있는 지역인가요?
    21.09s  agent 발화 시작: 네, 그렇습니다. 하지만 행정 구역 지위는 시간이 지나면서 바뀌었어요. 현재는 누벨아키텐 지역의 일부입니다.
    21.16s  user  발화 끝
    28.19s  agent 발화 끝
    29.04s  user  발화 시작: 그러면 꽤 오래된 성이군요? 중세 시대만큼 오래됐나요?
    32.09s  <ret> 발화 (turn6 첫 프레임)
    32.40s  agent 발화 시작: <ret> 성의 나이를 파악하려면 초기 기록을 살펴봐야 합니다. 듀 플레시 성의 가장 오래된 기록은 12세기
    32.42s  user  발화 끝
    34.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.34s]: The earliest documented instance of the du Plessis name appears in rec
    39.35s  agent 발화 끝
    39.40s  user  발화 시작: 와, 12세기요! 정말 오래됐네요. 원래 귀족 가문이었나요?
    43.99s  agent 발화 시작: 보통 그런 성은 토지를 소유한 가문과 관련이 있는 경우가 많습니다.
    44.12s  user  발화 끝
    48.34s  agent 발화 끝
    48.49s  user  발화 시작: 그런데 듀 플레시 성은 당시 흔한 성이었나요, 아니면 드문 성이었나요?
    53.00s  user  발화 시작: 많은 사람들이 가지고 있었나요, 아니면 몇몇 사람들만 가지고 있었나요?
    53.06s  user  발화 끝
    56.86s  <ret> 발화 (turn11 첫 프레임)
    57.02s  agent 발화 시작: <ret> 성의 보편성을 파악하려면 역사적 인구 통계를 살펴봐야 합니다. 중세 시대에 듀 플레시 성은 푸아투
    57.03s  user  발화 끝
    58.78s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.59s]: During the medieval period, du Plessis was primarily concentrated amon
    66.20s  agent 발화 끝
    67.15s  user  발화 시작: 하급 귀족… 왕이나 공작은 아니고… 기사 정도였나요?
    71.52s  agent 발화 시작: 기사나 최고위 계급보다 낮은 작위를 가진 토지 소유주였을 수도 있습니다. 사회 구조는 미묘하게 복잡합니다.
    71.63s  user  발화 끝
    77.42s  user  발화 시작: 그 성은 프랑스 밖으로 퍼져 나간 적이 있나요?
    77.87s  agent 발화 끝
    79.59s  <ret> 발화 (turn15 첫 프레임)
    79.91s  agent 발화 시작: <ret> 성은 이주와 정착을 통해 사람들과 함께 이동하는 경우가 많습니다. 듀 플레시 성은 17세기 말 프
    80.14s  user  발화 끝
    80.79s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.06s]: The du Plessis name spread to South Africa with French Huguenots in th
    88.49s  agent 발화 끝
    89.31s  user  발화 시작: 위그노들은 종교 박해를 피해 도망친 개신교도들이었죠?
    92.83s  agent 발화 시작: 맞습니다. 그들은 네덜란드 케이프 식민지 등 다른 나라로 피난처를 찾았습니다.
    92.87s  user  발화 끝
    97.69s  agent 발화 끝
    97.77s  user  발화 시작: 그래서 남아프리카에 가게 된 거군요. 흥미롭네요. 지금 남아프리카에서 흔한 성인가요?
   102.57s  <ret> 발화 (turn19 첫 프레임)
   102.73s  agent 발화 시작: <ret> 성의 현재 분포를 파악하려면 인구 조사 데이터를 확인해야 합니다. 듀 플레시 성은 현재 남아프리카
   102.78s  user  발화 끝
   104.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.03s]: Du Plessis is currently the twenty-third most common surname in South 
   111.30s  agent 발화 끝
   111.41s  user  발화 시작: 23번째… 목록에서 꽤 높은 순위네요! 많은 가족들이 남아 있었나 봐요.
   116.73s  user  발화 끝
   116.81s  agent 발화 시작: 그렇습니다. 그 나라 인구 내에서 강력하고 지속적인 존재감을 보여주는 것 같습니다.
   122.78s  agent 발화 끝
   123.33s  user  발화 시작: “영주의 저택” 외에 다른 의미나 상징이 있나요?
   126.06s  <ret> 발화 (turn23 첫 프레임)
   126.28s  user  발화 끝
   126.29s  agent 발화 시작: <ret> 성의 상징은 종종 가족의 역사나 열망과 관련이 있습니다. “플레시” 부분은 작은 울타리가 쳐진 영
   128.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: The “Plessis” component signifies a small enclosed piece of land, ofte
   135.66s  agent 발화 끝
   135.88s  user  발화 시작: 폐쇄된 영주의 저택… 안전과 방어의 장소였군요. 말이 되네요.
   140.17s  agent 발화 시작: 그렇지 않나요? 성은 종종 그 기원의 가치와 우려를 반영합니다. 하우사 왕국의 성벽 도시를 떠올리게 하네요.
   140.32s  user  발화 끝
   148.70s  agent 발화 끝
