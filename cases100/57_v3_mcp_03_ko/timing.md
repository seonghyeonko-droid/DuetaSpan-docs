# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "채빈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "dish",
#       "text": "User's go-to comfort dish is seafood pasta."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "airline",
#       "text": "User usually flies with United."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "plant",
#       "text": "User is growing basil on the windowsill at home."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 19°C."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "learning",
#       "text": "User is training for a half-marathon."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-01-10",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 너무 힘들어요. 헤어진 지 한 달 정도 됐는데, 아직도  | S2 그냥… 자꾸 옛 생각만 나고, 연락하고 싶어져요. | S3 …근데, 연락을 아예 끊는… | S4 일기… 한번 써볼게요. 감사합니다.

     0.00s  user  발화 시작: 요즘 너무 힘들어요. 헤어진 지 한 달 정도 됐는데, 아직도 마음이 안 좋아요.
     5.04s  user  발화 끝
     5.21s  agent 발화 시작: 헤어진 후엔 마음이 많이 힘든 건 당연해요. 괜찮아질 시간이 필요하답니다.
     7.70s  user  발화 시작: 네.
     8.13s  user  발화 끝
     9.84s  agent 발화 끝
     9.98s  user  발화 시작: 네, 그러겠죠… 혹시 헤어진 후에 어떻게 마음을 추스르는 게 좋을까요?
    12.90s  agent 발화 시작: 네.
    13.49s  agent 발화 끝
    15.06s  <ret> 발화 (turn5 첫 프레임)
    15.31s  user  발화 끝
    15.31s  agent 발화 시작: <ret> 마음을 추스르는 방법은 사람마다 다르지만— 자신을 돌보는 게 중요해요. 새로운 취미를 시작하거나 
    15.80s  ⚡SPAN 주입 [d'=0.73s / d_lead=2.79s]: 헤어진 후에는 자신을 돌보는 것이 중요하며, 새로운 취미를 시작하거나 친구들과 시간을 보내는 것이 도움이 될 수 있습니다.
    21.70s  user  발화 시작: 음.
    22.00s  user  발화 끝
    24.82s  agent 발화 끝
    24.99s  agent 발화 시작: 혹시 지금 가장 힘든 부분이 뭔가요?
    27.48s  agent 발화 끝
    27.58s  user  발화 시작: 그냥… 자꾸 옛 생각만 나고, 연락하고 싶어져요.
    31.12s  <ret> 발화 (turn9 첫 프레임)
    31.36s  user  발화 끝
    31.41s  agent 발화 시작: <ret> 옛 생각이 나는 건 자연스러운 일이지만— 전 연인과의 연락은 자제하는 게 좋아요. 자신의 감정을 
    31.97s  ⚡SPAN 주입 [d'=0.84s / d_lead=2.83s]: 전문가들은 헤어진 후에는 전 연인과의 연락을 자제하고, 자신의 감정을 정리하는 데 집중하는 것이 중요하다고 조언합니다.
    35.34s  user  발화 시작: 그렇죠.
    35.90s  user  발화 끝
    39.87s  user  발화 시작: …근데, 연락을 아예 끊는…
    39.89s  agent 발화 끝
    42.11s  user  발화 끝
    44.22s  user  발화 시작: …게 그렇게 쉬운 일이 아니잖아요.
    46.10s  user  발화 끝
    46.36s  agent 발화 시작: 연락을 끊는 게 쉽지 않다는 말씀, 잘 알아요. 그럼, 연락을 자제하는 대신, 다른 방식으로 감정을 해소하는
    58.17s  agent 발화 끝
    58.19s  user  발화 시작: 일기… 한번 써볼게요. 감사합니다.
    60.97s  user  발화 끝
    61.23s  agent 발화 시작: 네, 물론이죠.
    62.47s  agent 발화 끝
