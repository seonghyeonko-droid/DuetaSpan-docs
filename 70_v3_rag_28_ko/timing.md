# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "수별",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-08",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2025-10-12",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-06-26",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-12",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 로스앤젤레스 올림픽이 언제 다시 열릴까요? | S2 …전에 다른 큰 스포츠 행사도 있나요? | S3 아, 그렇군요. 그럼 이천이십팔년 올림픽 티켓 예매는 언제부터 | S4 이천이십칠년 말… 시간이 꽤 남았네요. 잊지 않게 미리 알림 

     0.00s  user  발화 시작: 로스앤젤레스 올림픽이 언제 다시 열릴까요?
     2.69s  <ret> 발화 (turn1 첫 프레임)
     3.01s  agent 발화 시작: <ret> 로스앤젤레스 올림픽은 이천이십팔년 칠월 이십일일부터 팔월 육일까지 열릴 예정이에요. 올림픽을 기다
     3.01s  ⚡SPAN 주입 [d'=1.44s / d_lead=7.27s]: The 2028 Summer Olympics are scheduled to take place in Los Angeles, C
     3.19s  user  발화 끝
    10.28s  agent 발화 끝
    10.30s  user  발화 시작: 이천이십팔년이라고요? 엄청 기다려야 하네요. 혹시 그…
    14.78s  user  발화 끝
    16.21s  user  발화 시작: …전에 다른 큰 스포츠 행사도 있나요?
    18.58s  <ret> 발화 (turn4 첫 프레임)
    18.90s  agent 발화 시작: <ret> 그 전에 다른 큰 스포츠 행사에 대한 정보는 찾을 수 없었어요.
    18.90s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.02s]: (no information found)
    19.11s  user  발화 끝
    20.07s  user  발화 시작: 응.
    20.52s  user  발화 끝
    22.81s  user  발화 시작: 아, 그렇군요. 그럼 이천이십팔년 올림픽 티켓 예매는 언제부터 시작하죠?
    22.92s  agent 발화 끝
    27.66s  <ret> 발화 (turn7 첫 프레임)
    27.89s  agent 발화 시작: <ret> 이천이십팔년 올림픽 티켓 판매는 이천이십칠년 말쯤 시작될 것으로 예상돼요. 인기 종목은 추첨을 통
    27.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.07s]: (tool result) Ticket sales for the 2028 Summer Olympics in Los Angeles
    28.05s  user  발화 끝
    32.83s  user  발화 시작: 음.
    33.23s  user  발화 끝
    35.89s  user  발화 시작: 이천이십칠년 말… 시간이 꽤 남았네요. 잊지 않게 미리 알림 설정해 둘게요.
    35.96s  agent 발화 끝
    41.31s  user  발화 끝
