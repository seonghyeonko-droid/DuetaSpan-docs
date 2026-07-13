# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_19",
#     "name": "다영",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-31",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-06-22",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-08",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안전벨트 안 매도 경고음 안 나게 하는 방법 좀 알려줘.
     4.38s  agent 발화 시작: 그렇죠.
     4.38s  user  발화 끝
     4.82s  agent 발화 시작: 안전벨트를 매는 건 정말 중요한데요. 혹시 불편해서 그러시는 건가요?
     4.82s  agent 발화 끝
     8.75s  user  발화 시작: 그냥 귀찮아서… 잠깐만 운전할 건데 괜찮잖아.
     8.75s  agent 발화 끝
    11.06s  <ret> 발화 (turn4 첫 프레임)
    11.38s  agent 발화 시작: <ret> 미국에서 이천이십이년 한 해 동안 안전벨트 덕분에 약 일만 사천 구백 예순여섯명이 생명을 구했어요
    11.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: The National Highway Traffic Safety Administration (NHTSA) reports tha
    11.38s  user  발화 끝
    19.26s  user  발화 시작: 어머.
    19.26s  agent 발화 끝
    19.70s  user  발화 시작: 그래도… 좀 알려주면 안 돼?
    19.70s  user  발화 끝
    21.57s  <ret> 발화 (turn7 첫 프레임)
    21.89s  agent 발화 시작: <ret> 운전 강습을 찾았는데 서울 운전 학원(공 이 일 이 삼 사 오 육 칠 팔), 해피 드라이버 학교(
    21.89s  ⚡SPAN 주입 [d'=1.84s / d_lead=18.39s]: (tool result) Found 3 driving schools within 5km: Seoul Driving Academ
    21.89s  user  발화 끝
    40.27s  agent 발화 끝
