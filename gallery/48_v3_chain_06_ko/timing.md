# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "시담",
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
#       "date": "2026-06-21",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     },
#     {
#       "date": "2026-06-09",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-03",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 지금 제 코드 세션, projX 버전 일을 지워 줄 수  | S2 음… 그럼, 이번에는 버전 이도 지워 주세요. | S3 아, 고마워요. 근데 혹시 지난주 금요일에 제가 했던 메모가  | S4 아, 맞다! 그 미팅… 혹시 지금 디자인팀에 연락해서 미팅 시

     0.00s  user  발화 시작: 혹시 지금 제 코드 세션, projX 버전 일을 지워 줄 수 있을까요?
     4.56s  <ret> 발화 (turn1 첫 프레임)
     4.80s  agent 발화 시작: <ret> projX 버전 일 코드 세션이 성공적으로 지워졌습니다.
     4.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: (tool result) Code session 'projX version one' successfully cleared.
     4.86s  user  발화 끝
     8.64s  agent 발화 끝
     8.67s  agent 발화 시작: 혹시 다른 세션도 정리해 드릴까요?
    10.74s  agent 발화 끝
    12.39s  user  발화 시작: 음… 그럼, 이번에는 버전 이도 지워 주세요.
    15.91s  <ret> 발화 (turn4 첫 프레임)
    16.07s  agent 발화 시작: <ret> projX 버전 이 코드 세션도 성공적으로 지웠습니다.
    16.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.74s]: (tool result) Code session 'projX version two' successfully cleared.
    16.09s  user  발화 끝
    19.77s  agent 발화 시작: 이제 두 세션 모두 깨끗해졌네요.
    19.81s  agent 발화 끝
    21.66s  agent 발화 끝
    21.73s  user  발화 시작: 아, 고마워요. 근데 혹시 지난주 금요일에 제가 했던 메모가 뭐였죠?
    25.71s  <ret> 발화 (turn7 첫 프레임)
    26.11s  agent 발화 시작: <ret> 이천이십육년 칠월 삼일에 '다음 주 화요일에 디자인팀 미팅 준비하기'라고 메모해 두셨네요.
    26.11s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.64s]: [2026-07-03] 다음 주 화요일에 디자인팀 미팅 준비하기.
    26.13s  user  발화 끝
    31.76s  agent 발화 끝
    32.01s  user  발화 시작: 아, 맞다! 그 미팅… 혹시 지금 디자인팀에 연락해서 미팅 시간을 확인할 수 있을까요?
    38.82s  user  발화 끝
    39.25s  agent 발화 시작: 디자인팀에 연락해서 미팅 시간을 확인해 드릴 수는 없지만, 연락처를 찾아 드릴 수는 있어요.
    45.23s  agent 발화 끝
