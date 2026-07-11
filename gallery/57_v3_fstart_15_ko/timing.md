# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "태형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-03",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-06-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 근처에 약국 좀 찾아줄 수 있어? 위도 삼십삼 점 사 사…
     3.98s  user  발화 끝
     5.29s  user  발화 시작: …경도 -백십이 점 영 칠야.
     7.26s  <ret> 발화 (turn2 첫 프레임)
     7.33s  agent 발화 시작: <ret> 주변에 Walgreens, CVS Pharmacy, Safeway Pharmacy가 있어요. 가까
     7.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.53s]: (tool result) pharmacies: Walgreens, CVS Pharmacy, Safeway Pharmacy
     7.40s  user  발화 끝
    10.48s  user  발화 시작: 맞아요.
    11.31s  user  발화 끝
    13.86s  agent 발화 끝
    13.98s  user  발화 시작: Walgreens까지 가는 길 좀 알려줘.
    15.66s  <ret> 발화 (turn5 첫 프레임)
    16.05s  agent 발화 시작: <ret> Walgreens까지는 이 점 오마일, 약 칠분 정도 걸립니다. 길 안내를 시작해 드릴까요?
    16.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.69s]: (tool result) Directions to Walgreens: Drive 2.5 miles, approximately 
    16.24s  user  발화 끝
    21.75s  agent 발화 끝
