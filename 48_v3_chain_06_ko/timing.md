# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "민희",
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
#       "date": "2026-01-02",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-25",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 이번 주 토요일에 영화 보러 가고 싶은데, 괜찮은 영화 있나요?
     3.98s  <ret> 발화 (turn1 첫 프레임)
     4.22s  agent 발화 시작: <ret> 죄송하지만, 지금으로는 이번 주 토요일 영화 정보를 찾을 수 없어요.
     4.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.30s]: (no information found)
     4.30s  user  발화 끝
     8.53s  agent 발화 끝
     8.72s  user  발화 시작: 그럼, 혹시 지금 상영 중인 영화는 알아볼 수 있을까요?
    12.94s  <ret> 발화 (turn3 첫 프레임)
    13.03s  user  발화 끝
    13.18s  agent 발화 시작: <ret> 지금 상영 중인 영화는 오펜하이머, 바비, 미션 임파서블: 데드 레코닝 파트 원이 있습니다. 혹시
    13.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.13s]: (tool result) "Oppenheimer, Barbie, Mission: Impossible - Dead Reckoni
    17.49s  user  발화 시작: 아.
    17.99s  user  발화 끝
    22.28s  agent 발화 시작: 오펜하이머는 크리스토퍼 놀란 감독의 작품으로, 원자폭탄 개발에 참여한 과학자들의 이야기를 다룬 영화입니다.
    22.32s  agent 발화 끝
    30.30s  agent 발화 끝
