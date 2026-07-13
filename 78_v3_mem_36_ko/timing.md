# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "예아",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-27",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-24",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 예아님! 저는 누나르예요. 오늘 하루도 잘 보내셨나요?
     4.83s  user  발화 시작: 안녕하세요, 누나르 씨. 잘 지냈어요. 혹시 제가 전에 얘기했던 리스본 여행 기억하세요?
     4.83s  agent 발화 끝
    11.90s  <ret> 발화 (turn2 첫 프레임)
    12.06s  agent 발화 시작: <ret> 네, 기억하고 있어요. 리스본 여행을 오월에 계획하고 계셨죠.
    12.06s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.83s]: [2025-06-17] User is planning a trip to Lisbon in May.
    12.06s  user  발화 끝
    16.89s  user  발화 시작: 와.
    16.89s  agent 발화 끝
    17.49s  user  발화 시작: 맞아요. 그때 제가 숙소 예약하는 걸 도와달라고 했었는데…
    17.49s  user  발화 끝
    21.92s  <ret> 발화 (turn5 첫 프레임)
    22.32s  agent 발화 시작: <ret> 네, 리스본의 '더 루미아레스 호텔 앤 스파'가 오월 한 달 내내 예약 가능하고, 일박에 이백오십
    22.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.25s]: (tool result) {"hotel name": "The Lumiares Hotel & Spa", "address": "R
    22.32s  user  발화 끝
    32.57s  user  발화 시작: 그렇죠.
    32.57s  agent 발화 끝
    33.17s  agent 발화 시작: 정말 다행이네요.
    33.17s  user  발화 끝
    34.38s  agent 발화 끝
