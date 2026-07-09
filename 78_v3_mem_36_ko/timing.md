# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  agent 발화 시작: 안녕하세요, 사히하님. 저는 리라예요. 오늘 만나 뵙게 되어 기뻐요.
     2.02s  user  발화 시작: 어어.
     2.65s  user  발화 끝
     4.12s  agent 발화 끝
     4.46s  user  발화 시작: 어, 안녕하세요, 리라. 음, 혹시 예전에 보던 차에 대해서 기억해?
     8.49s  <ret> 발화 (turn3 첫 프레임)
     8.64s  agent 발화 시작: <ret> 제가 한번 찾아볼게요. 서른만 마일 미만의 중고 하이브리드 차량을 알아보셨어요.
     8.86s  user  발화 끝
    10.17s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.71s]: Past chat — Researching a used car: comparing hybrid models; wants und
    13.87s  agent 발화 끝
    14.55s  user  발화 시작: 맞아, 딱 그거! 그리고 맥스가 같이 로드 트립에 갈 수 있을지 궁금해… 맥스 이름 기억나?
    20.45s  <ret> 발화 (turn5 첫 프레임)
    20.85s  agent 발화 시작: <ret> 물론이죠, 쉽게 확인해 드릴 수 있어요. 골든 리트리버 맥스라고 하셨으니, 네, 기억하고 있어요.
    20.89s  user  발화 끝
    22.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.39s]: Past chat — User has a Golden Retriever named Max.
    26.36s  agent 발화 끝
