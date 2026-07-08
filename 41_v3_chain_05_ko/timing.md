# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 네, 2023년에 나온 캐럴 몇 곡을 알려 드릴게요.
     2.61s  <ret> 발화 (turn1 첫 프레임)
     3.21s  agent 발화 시작: <ret> 음, 마리아 캐리가 2023년 11월 17일에 칼리드와 함께 “Christmas Without Y
     3.24s  user  발화 끝
     3.61s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.41s]: (tool result) “Christmas Without You” by Mariah Carey featuring Khalid
     7.33s  agent 발화 끝
     7.54s  user  발화 시작: 흠, 좋네요. 좀 더 전통적인 느낌의 곡은 없을까요?
    10.12s  user  발화 끝
    10.13s  agent 발화 시작: 전통적인 크리스마스 음악은 정말 오랫동안 사랑받는 매력이 있죠.
    16.57s  agent 발화 끝
    17.31s  user  발화 시작: 네, 그렇지만 새로운 곡이요. 전통적인 느낌이 나는 새로운 곡을 찾아 주실 수 있나요?
    19.21s  <ret> 발화 (turn5 첫 프레임)
    19.81s  agent 발화 시작: <ret> 물론 찾아 드릴 수 있어요. 더 하트랜디어가 2023년 11월 3일에 “A Cozy Christm
    19.88s  user  발화 끝
    20.21s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.91s]: (tool result) “A Cozy Christmas Eve” by The Heartlandaires released No
    24.90s  user  발화 시작: 알겠습니다. “A Cozy Christmas Eve”가 딱 좋겠네요. 재생해 주시겠어요?
    24.99s  agent 발화 끝
    25.84s  <ret> 발화 (turn7 첫 프레임)
    26.31s  agent 발화 시작: <ret> 네, 바로 재생해 드릴게요. 지금 스포티파이에서 더 하트랜디어가 부른 “A Cozy Christm
    26.37s  user  발화 끝
    26.84s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.63s]: (tool result) Now playing “A Cozy Christmas Eve” by The Heartlandaires
    34.09s  agent 발화 끝
