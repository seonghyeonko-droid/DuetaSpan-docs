# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "소담",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-22",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-05-30",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 피부과 예약 좀 잡아 주세요. | S2 알겠습니다. | S3 …혹시 김 선생님 예약 전에 근처 카페라도 알아봐 주실 수 있 | S4 아, 다행이네요. 예약 시간까지 커피 마시면서 시간 보내야겠어

     0.00s  user  발화 시작: 이번 주 토요일에 피부과 예약 좀 잡아 주세요.
     3.93s  agent 발화 시작: 네, 피부과 예약 도와드릴게요. 혹시 선호하는 의사 선생님이 있으신가요?
     3.93s  user  발화 끝
     8.34s  user  발화 시작: 음.
     8.34s  agent 발화 끝
     8.83s  user  발화 시작: 음… 김민준 선생님으로 부탁드려요.
     8.83s  user  발화 끝
    10.48s  <ret> 발화 (turn4 첫 프레임)
    10.80s  agent 발화 시작: <ret> 김민준 선생님은 토요일 오후 두 시, 네 시, 여섯 시에 예약이 가능합니다.
    10.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.89s]: (tool result) 김민준 선생님은 토요일 오후 두 시, 네 시, 여섯 시에 예약 가능합니다.
    10.80s  user  발화 끝
    16.69s  user  발화 시작: 오후 네 시로 예약해 주세요.
    16.69s  agent 발화 끝
    18.82s  <ret> 발화 (turn6 첫 프레임)
    19.14s  agent 발화 시작: <ret> 예약이 완료되었습니다. 예약 번호는 칠 팔 구 이 삼 사입니다.
    19.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: (tool result) 예약이 완료되었습니다. 예약 번호는 789234입니다.
    19.14s  user  발화 끝
    24.05s  user  발화 시작: 알겠습니다.
    24.05s  agent 발화 끝
    24.54s  agent 발화 시작: 예약 확인 문자를 보내드렸습니다. 혹시 다른 예약이 필요하신가요?
    24.54s  user  발화 끝
    28.46s  user  발화 시작: 네.
    28.46s  agent 발화 끝
    28.96s  agent 발화 시작: 여행 준비에 도움이 될 만한 정보도 찾아드릴 수 있습니다.
    28.96s  user  발화 끝
    33.37s  user  발화 시작: 여행요? 갑자기 왜 여행 얘기를—
    33.37s  agent 발화 끝
    35.83s  user  발화 시작: …혹시 김 선생님 예약 전에 근처 카페라도 알아봐 주실 수 있을까요?
    35.83s  user  발화 끝
    40.82s  <ret> 발화 (turn13 첫 프레임)
    41.22s  agent 발화 시작: <ret> 김민준 선생님 피부과 근처에 괜찮은 카페를 찾아보겠습니다.
    41.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.44s]: (tool result) 김민준 피부과 근처에 '커피베네', '스타벅스', '투썸플레이스'가 있습니다. 커피베네 평점이 가장 
    41.22s  user  발화 끝
    44.66s  agent 발화 시작: 김민준 피부과 근처에는 '커피베네', '스타벅스', '투썸플레이스'가 있습니다. 커피베네 평점이 가장 높습니
    44.66s  agent 발화 끝
    50.06s  user  발화 시작: 커피베네로 가 봐야겠네요.
    50.06s  agent 발화 끝
    51.53s  agent 발화 시작: 커피베네까지 도보로 약 십분 정도 걸립니다.
    51.53s  user  발화 끝
    54.47s  user  발화 시작: 그럼 혹시 그 카페에 와이파이 되는지 알아봐 주시겠어요?
    54.47s  agent 발화 끝
    58.24s  <ret> 발화 (turn18 첫 프레임)
    58.40s  agent 발화 시작: <ret> 커피베네는 무료 와이파이를 제공합니다. 커피베네 공식 웹사이트에 따르면 모든 매장에서 와이파이를 
    58.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.87s]: (tool result) 커피베네는 무료 와이파이를 제공합니다. 커피베네 공식 웹사이트에 따르면 모든 매장에서 와이파이를 사용
    58.40s  user  발화 끝
    65.27s  user  발화 시작: 네.
    65.27s  agent 발화 끝
    65.76s  user  발화 시작: 아, 다행이네요. 예약 시간까지 커피 마시면서 시간 보내야겠어요.
    65.76s  user  발화 끝
    69.69s  agent 발화 시작: 예약 시간까지 편안하게 시간 보내세요.
    69.69s  user  발화 끝
    72.14s  user  발화 시작: 감사합니다.
    72.14s  agent 발화 끝
    72.63s  agent 발화 시작: 천만에요. 즐거운 시간 보내세요.
    72.63s  user  발화 끝
    74.60s  agent 발화 끝
