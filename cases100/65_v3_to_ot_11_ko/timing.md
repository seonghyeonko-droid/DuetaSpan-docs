# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "윤슬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-24",
#       "category": "car",
#       "text": "User drives a 2021 Tesla Model 3."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "sibling",
#       "text": "User has a younger sibling named Lucas."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "bloodtype",
#       "text": "User's blood type is O+."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "dislike",
#       "text": "User can't stand liver."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "anniversary",
#       "text": "User's anniversary is May 25."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-09",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2025-12-19",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 사물 인터넷이라는 말이 언제 처음 나왔는지 아세요?
     3.49s  <ret> 발화 (turn1 첫 프레임)
     3.85s  agent 발화 시작: <ret> 사물 인터넷이라는 말은 천구백구십구년에 프로クター 앤 갬블에서 일하던 케빈 애쉬턴이 처음 사용했어
     3.94s  ⚡SPAN 주입 [d'=0.46s / d_lead=6.77s]: The term “Internet of Things” was coined by Kevin Ashton in 1999 while
     4.03s  user  발화 끝
     8.75s  user  발화 시작: 그렇죠.
     9.57s  user  발화 끝
    10.62s  agent 발화 끝
    10.65s  agent 발화 시작: 그분이 처음 사용하신 거니까, 거의 이십오년 전이네요.
    14.76s  user  발화 시작: 잠깐만, 지금 엄마한테 전화 좀 해야 돼.
    14.81s  agent 발화 끝
    17.88s  user  발화 시작: 아, 죄송해요. 다시 말씀해 주시겠어요?
    18.00s  user  발화 끝
    21.07s  user  발화 끝
    21.21s  agent 발화 시작: 네, 물론이죠. 사물 인터넷이라는 말은 천구백구십구년에 케빈 애쉬턴이 처음 사용했어요.
    28.13s  agent 발화 시작: 그게 처음이었답니다.
    28.16s  agent 발화 끝
    29.65s  agent 발화 끝
