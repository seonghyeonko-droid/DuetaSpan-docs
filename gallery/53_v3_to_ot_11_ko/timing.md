# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "우찬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-12",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     },
#     {
#       "date": "2025-08-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-07",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 호간의 영웅들에서 슐츠 상사를 연기한 사람이 누구였지? | S2 맞아요, 옛날 드라마는 다 그런 것 같아요. | S3 …존 배너는 다른 드라마에도 출연했었나? | S4 …관련 영화를 많이 하셨나 보네.

     0.00s  user  발화 시작: 호간의 영웅들에서 슐츠 상사를 연기한 사람이 누구였지?
     3.28s  <ret> 발화 (turn1 첫 프레임)
     3.33s  user  발화 끝
     3.52s  agent 발화 시작: <ret> 호간의 영웅들에서 슐츠 상사 역할을 맡은 건 존 배너였어요. 그분은 정말 인상적인 연기를 보여주셨
     3.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: John Banner played the role of Sergeant Hans Wilhelm Schultz in the te
    10.90s  user  발화 시작: 음, 그 드라마가 언제 처음 시작했는지 기억나?
    10.93s  agent 발화 끝
    13.39s  <ret> 발화 (turn3 첫 프레임)
    13.70s  agent 발화 시작: <ret> 호간의 영웅들은 천구백육십오년 구월 십칠일에 처음 방영돼서 천구백칠십일년 삼월 이십팔일에 끝났어요
    13.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.83s]: Hogan's Heroes originally aired from September 17, 1965, to March 28, 
    13.96s  user  발화 끝
    23.44s  user  발화 시작: 맞아요, 옛날 드라마는 다 그런 것 같아요.
    23.53s  agent 발화 끝
    25.96s  agent 발화 시작: 그 드라마가 워낙 인기가 많아서…
    26.03s  user  발화 끝
    28.18s  agent 발화 끝
    28.36s  user  발화 시작: …존 배너는 다른 드라마에도 출연했었나?
    30.75s  <ret> 발화 (turn7 첫 프레임)
    31.07s  agent 발화 시작: <ret> 존 배너는 여러 작품에 출연했는데, 특히 전쟁 영화에서 자주 볼 수 있었어요.
    31.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: John Banner also appeared in films such as The Great Escape and The Lo
    31.27s  user  발화 끝
    36.44s  agent 발화 끝
    36.54s  agent 발화 시작: 존 배너는 대탈출과 최장일과 같은 영화에도 출연했어요. 다양한 역할을 소화하셨죠.
    39.49s  user  발화 시작: 그래.
    39.98s  user  발화 끝
    41.68s  agent 발화 끝
    42.45s  user  발화 시작: 오, 그럼 그분은 주로 전쟁…
    44.62s  user  발화 끝
    46.50s  user  발화 시작: …관련 영화를 많이 하셨나 보네.
    48.24s  user  발화 끝
    48.34s  agent 발화 시작: 네, 전쟁 영화뿐만 아니라 코미디 영화에도 출연하셨어요. 다재다능한 배우셨죠.
    53.44s  agent 발화 끝
