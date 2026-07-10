# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "현별",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-01",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 프로운님. 지금 부산 시간 몇 시예요? | S2 사실 다음 달에 리스본 여행을 가기로 했거든요. | S3 맞아요. 그런데 여행 준비가 좀 복잡하네요… | S4 좋아요, 알려주셔서 감사합니다.

     0.00s  agent 발화 시작: 안녕하세요, 현별님. 저는 프로운이라고 해요. 커리어 선택이나 업무 스트레스 관리에 도움을 드리는 상담사입니
     6.40s  agent 발화 끝
     7.10s  user  발화 시작: 안녕하세요, 프로운님. 지금 부산 시간 몇 시예요?
    10.02s  <ret> 발화 (turn2 첫 프레임)
    10.10s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오전 열시 십칠분이에요.
    10.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.12s]: (tool result) It is Friday, July 10, 2026 at 10:17 AM in Asia/Seoul ri
    10.34s  user  발화 끝
    11.57s  user  발화 시작: 그렇죠.
    12.34s  user  발화 끝
    14.22s  agent 발화 끝
    16.26s  user  발화 시작: 아, 그렇군요.
    17.42s  agent 발화 시작: 혹시 오늘 특별한 계획이 있으신가요?
    17.50s  user  발화 끝
    19.31s  agent 발화 끝
    19.62s  user  발화 시작: 사실 다음 달에 리스본 여행을 가기로 했거든요.
    22.34s  <ret> 발화 (turn7 첫 프레임)
    22.64s  agent 발화 시작: <ret> 삼월에 가신다고 말씀하신 적이 있으셨어요.
    22.66s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.36s]: [2025-09-24] User is planning a trip to Lisbon in March.
    22.76s  user  발화 끝
    23.32s  user  발화 시작: 네.
    23.72s  user  발화 끝
    25.00s  agent 발화 끝
    26.28s  user  발화 시작: 맞아요. 그런데 여행 준비가 좀 복잡하네요…
    29.17s  <ret> 발화 (turn10 첫 프레임)
    29.24s  user  발화 끝
    29.25s  agent 발화 시작: <ret> 여행 준비가 복잡하게 느껴지실 때는 언제든 저에게 말씀해주세요. 필요한 정보를 찾아드릴 수 있어요
    29.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.57s]: (tool result) I found several restaurants in Lisbon: Time Out Market L
    37.81s  agent 발화 시작: 리스본에는 타임 아웃 마켓 리스보아, 세르베자리아 하미로, 파스테이스 드 벨렘 같은 맛집들이 있어요.
    37.83s  agent 발화 끝
    45.36s  agent 발화 끝
    45.70s  user  발화 시작: 파스테이스 드 벨렘… 맛있어 보이네요.
    48.52s  agent 발화 시작: 네, 유명한 에그타르트 가게예요. 달콤한 디저트를 좋아하신다면 꼭 방문해보세요.
    48.66s  user  발화 끝
    51.07s  user  발화 시작: 네.
    51.85s  user  발화 끝
    53.82s  user  발화 시작: 좋아요, 알려주셔서 감사합니다.
    53.84s  agent 발화 끝
    55.86s  agent 발화 시작: 언제든 도움이 필요하시면 편하게 말씀해주세요. 즐거운 하루 보내세요.
    56.08s  user  발화 끝
    59.74s  agent 발화 끝
