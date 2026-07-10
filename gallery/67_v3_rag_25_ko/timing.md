# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "현람",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-20",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-09-05",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-31",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 메리 도리아 러셀하고 제임스 조이스가 둘 다 소설 | S2 아, *스패로우*요. 그 책 읽어본… | S3 조이스는 어떤가요? 좀 더 쉽게 읽히나요? | S4 …그럼 그 두 분이 작품을 쓴 시대적 배경도 많이 달랐겠네요?

     0.00s  user  발화 시작: 안녕하세요. 메리 도리아 러셀하고 제임스 조이스가 둘 다 소설가인가요?
     4.29s  agent 발화 시작: 네, 두 분 모두 소설가이십니다.
     4.44s  user  발화 끝
     6.51s  agent 발화 끝
     6.60s  user  발화 시작: 음… 그 두 분의 작품 스타일이 많이 다르잖아요.
     9.49s  agent 발화 시작: 스타일은 개인의 개성이 드러나는 부분이니까요.
     9.61s  user  발화 끝
    12.59s  agent 발화 끝
    12.69s  user  발화 시작: 러셀의 작품에 대해 좀 더 자세히 알려주시겠어요?
    15.26s  <ret> 발화 (turn5 첫 프레임)
    15.34s  agent 발화 시작: <ret> 메리 도리아 러셀은 특히 천구백구십칠년 아서 C. 클라크 상을 수상한 *스패로우*로 유명한 미국의
    15.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.46s]: Mary Doria Russell is an American author best known for her science fi
    15.60s  user  발화 끝
    22.70s  user  발화 시작: 아, *스패로우*요. 그 책 읽어본…
    22.80s  agent 발화 끝
    25.24s  user  발화 끝
    26.37s  user  발화 시작: …적 있어요. 좀 난해하긴 했죠.
    29.05s  agent 발화 시작: 많은 분들이 그렇게 느끼시는 것 같아요. 깊이 있는 주제를 다루고 있어서요.
    29.23s  user  발화 끝
    33.82s  agent 발화 끝
    34.51s  user  발화 시작: 조이스는 어떤가요? 좀 더 쉽게 읽히나요?
    37.18s  <ret> 발화 (turn10 첫 프레임)
    37.34s  agent 발화 시작: <ret> 제임스 조이스는 의식의 흐름 기법을 적용한 획기적인 작품인 *율리시스*로 가장 잘 알려진 아일랜드
    37.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.65s]: James Joyce was an Irish novelist, short story writer, poet, teacher, 
    37.42s  user  발화 끝
    40.23s  user  발화 시작: 네.
    40.58s  user  발화 끝
    44.99s  agent 발화 끝
    46.34s  user  발화 시작: 의식의 흐름이라… —
    47.81s  user  발화 시작: …그럼 그 두 분이 작품을 쓴 시대적 배경도 많이 달랐겠네요?
    47.95s  user  발화 끝
    51.20s  <ret> 발화 (turn14 첫 프레임)
    51.60s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 세시 십칠분입니다.
    51.60s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.81s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Asia/Seoul rig
    51.79s  user  발화 끝
    53.58s  user  발화 시작: 어머.
    53.94s  user  발화 끝
    56.42s  agent 발화 끝
    58.18s  user  발화 시작: 그렇군요. 시간이 정말 빠르네요.
    60.47s  agent 발화 시작: 시간이 흐르는 건 자연스러운 일이죠. 현재에 집중하는 게 중요해요.
    60.58s  user  발화 끝
    65.05s  agent 발화 끝
