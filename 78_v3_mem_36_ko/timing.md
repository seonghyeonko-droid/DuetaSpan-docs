# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "현준",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-15",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-10-05",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 현준님. 저는 티오온이라고 해요. 오늘 하루는 어떠셨어요?
     4.23s  user  발화 시작: 어… 그냥 그랬어. 전에 교토 여행 얘기했던 거 기억나?
     4.23s  agent 발화 끝
     8.98s  agent 발화 시작: 네.
     8.98s  user  발화 끝
     9.27s  <ret> 발화 (turn3 첫 프레임)
     9.51s  agent 발화 시작: <ret> 네, 팔월에 교토 여행을 계획하고 계셨던 것 기억하고 있어요. 혹시 더 자세한 계획을 세우는 데 
     9.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.98s]: [2025-10-05] User is planning a trip to Kyoto in August.
     9.51s  agent 발화 끝
    18.49s  user  발화 시작: 그때 숙소 예약을 아직 안 했었지. 괜찮은 호텔 좀 찾아줘.
    18.49s  agent 발화 끝
    23.37s  <ret> 발화 (turn5 첫 프레임)
    23.77s  agent 발화 시작: <ret> 교토에서 이천이십육년 팔월 일일부터 팔일까지 일인 숙소 검색 결과가 나왔어요. 다양한 호텔이 있으
    23.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.09s]: (tool result) {"city": "Kyoto", "check in date": "2026-08-01", "check 
    23.77s  user  발화 끝
    34.87s  user  발화 시작: 음… 가격대는 조금 비싼 편으로 해 줘.
    34.87s  agent 발화 끝
    38.56s  agent 발화 시작: 조금 비싼 편의 호텔로 찾아볼게요. 어떤 스타일을 선호하시나요? 전통적인 료칸이나 현대적인 호텔 중 어디가 
    38.56s  user  발화 끝
    47.02s  agent 발화 끝
