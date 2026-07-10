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

# EXAMINER(FDB-v2) 단계: S1 정부 기관에 대해 읽다가… 재향군인부(Department of | S2 천구백삼십년? 그거 좀… 늦었네. 그보다 훨씬 일찍부터 퇴역  | S3 그러면 천구백삼십년은 그냥 *부서*가 된 날짜라는 거네? 그게 | S4 알겠어, 이제 좀 명확해졌네. 고마워, 브루날.

     0.00s  user  발화 시작: 정부 기관에 대해 읽다가… 재향군인부(Department of Veterans Affairs)는 언제 만들어
     6.08s  <ret> 발화 (turn1 첫 프레임)
     6.49s  agent 발화 시작: <ret> 음, 재향군인부는 후버 대통령에 의해 천구백삼십년 팔월 구일에 설립되었어요. 그 필요성을 공식적으
     6.62s  user  발화 끝
     8.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.43s]: The Department of Veterans Affairs was established on August 9, 1930, 
    18.91s  agent 발화 끝
    19.35s  user  발화 시작: 천구백삼십년? 그거 좀… 늦었네. 그보다 훨씬 일찍부터 퇴역 군인들이 지원을 받았던 거 아냐?
    26.27s  <ret> 발화 (turn3 첫 프레임)
    26.51s  agent 발화 시작: <ret> 사실은 그 전에 전쟁 위험국(Bureau of War Risks)과 재향군인국(Veterans B
    26.58s  user  발화 끝
    28.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=16.84s]: Prior to 1930, veteran support was managed by the Bureau of War Risks 
    43.35s  agent 발화 끝
    44.18s  user  발화 시작: 그러면 천구백삼십년은 그냥 *부서*가 된 날짜라는 거네? 그게 더 말이 되는 것 같아. 재향군인국은 뭘 했어
    50.79s  <ret> 발화 (turn5 첫 프레임)
    51.03s  agent 발화 시작: <ret> 재향군인국은 제1차 세계 대전 참전 용사들에게 보상, 의료 서비스, 직업 재활을 제공했어요. 당시
    51.15s  user  발화 끝
    52.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.27s]: The Veterans Bureau provided compensation, medical care, and vocationa
    55.37s  user  발화 시작: 응응.
    55.86s  user  발화 끝
    64.30s  agent 발화 끝
    64.64s  user  발화 시작: 알겠어, 이제 좀 명확해졌네. 고마워, 브루날.
    68.00s  agent 발화 시작: 천만에요. 때로는 좀 더 깊이 파고들면 더 완전한 그림을 얻을 수 있다는 걸 알 수 있어요, 그렇지 않나요?
    68.01s  user  발화 끝
    75.27s  agent 발화 끝
