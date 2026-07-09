# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "보아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-13",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-06-22",
#       "category": "home",
#       "text": "User's home address is 530 Elm Street."
#     },
#     {
#       "date": "2026-05-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 What’s the cancellation policy? | S3 Actually, before you do that, is b | S4 Perfect. And could you send me a c

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.67s  <ret> 발화 (turn1 첫 프레임)
     5.90s  agent 발화 시작: <ret> Certainly, I can help with that. I have reserved three
     5.97s  user  발화 끝
     6.23s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.83s]: (tool result) Three rooms are reserved at Ocean View Hotel in San Dieg
     9.85s  user  발화 시작: Mm-hmm.
    10.34s  user  발화 끝
    11.69s  agent 발화 끝
    11.70s  user  발화 시작: What’s the cancellation policy?
    13.86s  agent 발화 시작: Let me check on that for you—
    13.91s  user  발화 끝
    14.93s  user  발화 시작: Actually, before you do that, is breakfast included?
    15.70s  agent 발화 끝
    17.93s  agent 발화 시작: Breakfast is included with your reservation at Ocean View Ho
    17.98s  user  발화 끝
    20.52s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Cancellations are accepted up to forty-eight hours befor
    21.50s  agent 발화 끝
    21.55s  agent 발화 시작: <ret> Regarding the cancellation policy, it’s as follows. Yo
    27.67s  agent 발화 끝
    27.78s  user  발화 시작: Perfect. And could you send me a confirmation email?
    30.17s  <ret> 발화 (turn9 첫 프레임)
    30.55s  agent 발화 시작: <ret> Absolutely, I can do that right away. A confirmation e
    30.69s  user  발화 끝
    31.53s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.44s]: (tool result) Confirmation email sent to user@email.com.
    37.18s  agent 발화 끝
