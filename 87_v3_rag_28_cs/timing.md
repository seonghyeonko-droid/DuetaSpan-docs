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

# EXAMINER(FDB-v2) 단계: S1 어디서 읽었는데, 재향군인부(Department of Vete | S2 1930년? 그거 좀… 늦네. 남북전쟁 즈음인 줄 알았어. | S3 알았어, 1885년… 근데 그게 완전한 부처는 아니었지? 그냥 | S4 그럼 1930년이 완전한 부처가 된 날짜인 거야?

     0.00s  user  발화 시작: 어디서 읽었는데, 재향군인부(Department of Veterans Affairs)가 생각보다 훨씬 일찍 
     6.19s  <ret> 발화 (turn1 첫 프레임)
     6.29s  user  발화 끝
     6.59s  agent 발화 시작: <ret> 네, 재향군인부는 천구백삼십 년 7월 21일에 정식으로 설립되었어요. 읽으신 내용과 일치하는지 확
     8.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.27s]: The United States Department of Veterans Affairs was established on Ju
    17.86s  agent 발화 끝
    17.99s  user  발화 시작: 1930년? 그거 좀… 늦네. 남북전쟁 즈음인 줄 알았어.
    24.05s  <ret> 발화 (turn3 첫 프레임)
    24.20s  agent 발화 시작: <ret> 맞아요, 의문 가지시는 게 당연해요. 의회는 천팔백팔십오 년에 국가 장애병사 자택(National
    24.33s  user  발화 끝
    26.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.55s]: The precursor to the Department of Veterans Affairs, the National Home
    37.37s  user  발화 시작: 알았어, 1885년… 근데 그게 완전한 부처는 아니었지? 그냥 집이었잖아?
    37.75s  agent 발화 끝
    43.20s  <ret> 발화 (turn5 첫 프레임)
    43.35s  agent 발화 시작: <ret> 네, 그 최초의 자택은 남북전쟁 당시 북군 참전 용사들을 위한 특별한 치료를 제공했어요. 하지만 
    43.43s  user  발화 끝
    45.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.57s]: The National Home for Disabled Soldiers provided domiciliary care for 
    49.52s  user  발화 시작: 응응.
    50.15s  user  발화 끝
    53.92s  user  발화 시작: 그럼 1930년이 완전한 부처가 된 날짜인 거야?
    53.92s  agent 발화 끝
    57.50s  agent 발화 시작: 정확해요. 그때 오늘날 우리가 알고 있는 부처 형태로 발전하게 되었답니다. 모든 게 시간이 지나면서 발전한다
    57.52s  user  발화 끝
    69.56s  agent 발화 끝
