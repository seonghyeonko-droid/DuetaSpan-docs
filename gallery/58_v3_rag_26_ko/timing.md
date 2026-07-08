# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어떤 나라 국기가 검은색, 빨간색, 노란색으로 되어 있는지 궁금해요.
     4.31s  agent 발화 시작: 그거 되게 흔한 질문인데.
     4.45s  user  발화 끝
     5.86s  <ret> 발화 (turn2 첫 프레임)
     6.23s  agent 발화 끝
     6.25s  agent 발화 시작: <ret> 색깔이랑 역사적인 연관성을 생각해 보면, 독일 국기가 검은색, 빨간색, 노란색이고 해방을 상징해.
     7.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.10s]: The flag of Germany features horizontal bands of black, red, and gold—
    13.90s  agent 발화 끝
    14.45s  user  발화 시작: 아, 맞다. 독일이네. 알았던 것 같기도 하고. [laugh] 그냥… 기억이 안 났어.
    20.80s  user  발화 끝
    20.85s  agent 발화 시작: 국가 상징 같은 건 좀 잊기 쉬워.
    23.00s  <ret> 발화 (turn5 첫 프레임)
    23.15s  agent 발화 시작: <ret> 국기 이야기를 하니까 제국이 생각나네. 베냉 왕국 국기랑 의상에 빨간색, 검은색, 흰색을 썼어.
    23.25s  agent 발화 끝
    25.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: The Kingdom of Benin, a West African state, used red, black, and white
    31.12s  user  발화 시작: 그 색깔들도 의미가 있었나요, 독일처럼?
    31.12s  agent 발화 끝
    33.84s  user  발화 끝
    33.93s  agent 발화 시작: 서아프리카 사회에서는 상징이 진짜 중요했지.
    37.23s  <ret> 발화 (turn8 첫 프레임)
    37.30s  agent 발화 시작: <ret> 색깔은 보통 통치자의 권력과 혈통을 나타냈어. 오요 제국에서는 노란색이 부와 통치자의 권위를 뜻했
    37.44s  agent 발화 끝
    38.75s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.90s]: The Oyo Empire’s flags prominently featured yellow, symbolizing wealth
    45.67s  user  발화 시작: 노란색이 부를 의미했다고요? 음… 꽤 직관적이네요.
    45.83s  agent 발화 끝
    49.80s  agent 발화 시작: 확실히 아주 직접적인 시각 언어였지.
    49.87s  user  발화 끝
    52.61s  agent 발화 끝
