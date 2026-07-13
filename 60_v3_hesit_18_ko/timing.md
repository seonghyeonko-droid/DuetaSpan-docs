# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "은안",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-05-02",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 농구선수 중에 삼점슛… | S2 와, 엄청 넣었네. | S3 그럼 그 다음으로 많이 넣은 선수는 누구야? — | S4 …근데 레이 앨런 선수는 지금 뭐 하고 지내?

     0.00s  user  발화 시작: 음… 농구선수 중에 삼점슛…
     1.88s  user  발화 시작: …제일 많이 넣은 사람이 누구지?
     1.88s  user  발화 끝
     3.92s  <ret> 발화 (turn2 첫 프레임)
     4.22s  agent 발화 시작: <ret> 삼점슛을 가장 많이 넣은 선수는 레이 앨런 선수인데, 통산 이천구백칠십삼개를 성공했대요.
     4.22s  user  발화 끝
     4.89s  ⚡SPAN 주입 [d'=0.97s / d_lead=5.16s]: Ray Allen is the National Basketball Association's all-time leader in 
     9.38s  user  발화 시작: 그래.
     9.38s  agent 발화 끝
     9.85s  user  발화 시작: 와, 엄청 넣었네.
     9.85s  user  발화 끝
    11.26s  agent 발화 시작: [happy] 네, 정말 대단하죠. 그 기록은 깨지기 힘들 것 같아요.
    11.26s  user  발화 끝
    15.95s  user  발화 시작: 응.
    15.95s  agent 발화 끝
    16.42s  user  발화 시작: 그럼 그 다음으로 많이 넣은 선수는 누구야? —
    16.42s  user  발화 끝
    20.17s  user  발화 시작: …근데 레이 앨런 선수는 지금 뭐 하고 지내?
    20.17s  user  발화 끝
    23.86s  <ret> 발화 (turn9 첫 프레임)
    23.92s  agent 발화 시작: <ret> 은퇴 후에는 에이 비 씨와 이 에스 피 엔에서 티 브이 해설가로 활동하고, 자선 경기에도 가끔 참
    23.92s  user  발화 끝
    24.52s  ⚡SPAN 주입 [d'=0.65s / d_lead=10.32s]: Allen has worked as a television analyst for ABC and ESPN, and has mad
    34.24s  agent 발화 끝
