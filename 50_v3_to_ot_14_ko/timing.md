# v3_to_ot_14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어디에서 여자 럭비 월드컵이 열리는지 궁금하네.
     3.71s  <ret> 발화 (turn1 첫 프레임)
     4.30s  agent 발화 시작: <ret> 네, 좋은 질문이세요. 여자 럭비 월드컵은 아일랜드 더블린에서 열린답니다.
     4.35s  user  발화 끝
     4.71s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.35s]: Dublin, Ireland.
     7.35s  agent 발화 끝
     7.93s  user  발화 시작: 오, 더블린! 항상 가보고 싶었어. 거기는 비싸?
    13.69s  agent 발화 시작: 취향에 따라 다르겠지만, 비쌀 수도 있어요.
    13.81s  user  발화 끝
    20.89s  user  발화 시작: 거기 좋은 빵집 있어? 아, 유명한 페이스트리 가게 있나?
    20.92s  agent 발화 끝
    23.71s  <ret> 발화 (turn5 첫 프레임)
    24.29s  agent 발화 시작: <ret> 아일랜드는 훌륭한 요리 문화를 가지고 있어요. 더 퀸 오브 타츠라는 유명한 빵집이 아일랜드 더블린
    24.40s  user  발화 끝
    24.71s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.24s]: The Queen of Tarts is a well-known bakery in Dublin, Ireland.
    29.89s  agent 발화 끝
    30.28s  user  발화 시작: 더 퀸 오브 타츠… 뭔가 기대되는데. 무슨 케이크를 만들어?
    33.15s  user  발화 끝
    33.37s  agent 발화 시작: 다양한 종류가 있는 걸로 알고 있어요.
    40.78s  agent 발화 끝
    41.53s  user  발화 시작: 친구가 지금 문자 보냈어… 아, 미안. 차에 문제가 생겼대.
    44.40s  user  발화 시작: 또 스타터 모터 문제인 것 같아.
    44.59s  user  발화 끝
    50.38s  user  발화 끝
    50.68s  user  발화 시작: 어쨌든, 케이크 얘기로 돌아가서. 10월에 더블린 날씨는 어때?
    51.44s  <ret> 발화 (turn11 첫 프레임)
    51.86s  agent 발화 시작: <ret> 10월은 날씨가 꽤 변덕스러울 수 있어요. 더블린의 10월 평균 최고 기온은 섭씨 14도랍니다.
    52.01s  user  발화 끝
    52.44s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.58s]: Dublin in October typically experiences average high temperatures of 1
    55.84s  user  발화 시작: 14도… 추운 온도네. [sigh] 코트 챙겨 입어야겠다.
    55.98s  agent 발화 끝
    59.58s  agent 발화 시작: 분명히 현명한 생각이에요, 네.
    59.73s  user  발화 끝
    62.82s  user  발화 시작: 그럼 럭비 자체는? 누가 올해 우승할 가능성이 높아?
    62.95s  agent 발화 끝
    69.05s  <ret> 발화 (turn15 첫 프레임)
    69.64s  agent 발화 시작: <ret> 몇몇 팀이 강세를 보이고 있어요. 뉴질랜드 블랙 펀즈가 현재 럭비 월드컵 챔피언이랍니다.
    69.77s  user  발화 끝
    70.05s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.39s]: New Zealand’s Black Ferns are the current Rugby World Cup champions.
    72.97s  agent 발화 끝
    73.01s  user  발화 시작: 뉴질랜드, 흠? 럭비는 항상 잘하잖아. 럭비랑 페이스트리 먹는 것 말고 더블린에서 할 만한 거 있어?
    78.79s  user  발화 끝
    78.83s  agent 발화 시작: 더블린은 역사와 문화가 풍부한 도시예요.
    82.06s  agent 발화 끝
    82.91s  user  발화 시작: 어떤 역사적인 유적지가 있어?
    88.28s  <ret> 발화 (turn19 첫 프레임)
    88.70s  user  발화 끝
    88.76s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.12s]: Dublin Castle has been a significant site in Irish history since the t
    88.87s  agent 발화 시작: <ret> 많이 있어요, 사실. 더블린 성은 13세기부터 아일랜드 역사에서 중요한 장소였답니다.
    94.47s  agent 발화 끝
