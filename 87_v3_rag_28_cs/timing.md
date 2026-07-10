# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Lucia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "home",
#       "text": "User's home address is 820 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어, 국방부 산하 참전용사처가 언제 시작됐는지 궁금했어. | S2 1930년이라고? 좀… 늦은 것 같아. 그 전에 뭐 없었어? | S3 그럼 처음부터 “참전용사처”라고 불린 건 아니었겠네? 원래 이 | S4 응, 그렇다. 고마워, 브루날.

     0.00s  user  발화 시작: 어, 국방부 산하 참전용사처가 언제 시작됐는지 궁금했어.
     4.09s  <ret> 발화 (turn1 첫 프레임)
     4.49s  agent 발화 시작: <ret> 네, 참전용사처는 천구백삼십 년 3월 3일에 설립되었어요. 국가를 위해 봉사하신 분들을 위한 서비
     4.58s  user  발화 끝
     6.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.13s]: The United States Department of Veterans Affairs was established on Ma
    15.61s  agent 발화 끝
    16.05s  user  발화 시작: 1930년이라고? 좀… 늦은 것 같아. 그 전에 뭐 없었어?
    21.90s  <ret> 발화 (turn3 첫 프레임)
    22.06s  agent 발화 시작: <ret> 음, 사실은 천팔백육십육 년에 설립된 국립 장애병사 및 선원 자택에서 발전된 거랍니다. 당연히 그
    22.17s  user  발화 끝
    23.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.45s]: The Department of Veterans Affairs evolved from the National Home for 
    33.51s  agent 발화 끝
    34.29s  user  발화 시작: 그럼 처음부터 “참전용사처”라고 불린 건 아니었겠네? 원래 이름이 뭐였어?
    40.52s  <ret> 발화 (turn5 첫 프레임)
    40.73s  user  발화 끝
    40.76s  agent 발화 시작: <ret> 처음에는 국립 장애병사 및 선원 자택이었고, 남북전쟁 당시 북군 참전용사들을 돌봤어요. 이런 기원
    41.99s  user  발화 시작: 응응.
    42.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: The National Home for Disabled Soldiers and Sailors was initially esta
    42.62s  user  발화 끝
    44.60s  agent 발화 끝
    44.94s  user  발화 시작: 응, 그렇다. 고마워, 브루날.
    47.42s  agent 발화 시작: 천만에요. 제가 그 점에 대해 명확하게 설명해 드릴 수 있어서 기쁩니다.
    47.52s  user  발화 끝
    53.49s  agent 발화 끝
