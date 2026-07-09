# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Noah · Location: Sydney, Australia · Nationality: Australian · Gender: male · Age: early 30s · TZ: Australia/Sydney (AEDT, UTC+11) · Currency: AUD ($)
#   B. 저장 메모리:
#      [2026-06-19] User works as a nurse.
#      [2026-06-02] User is into marathon training.
#      [2026-04-04] User is allergic to penicillin.
#      [2026-03-15] User is planning a trip to Vietnam in August.
#   B. 과거 대화 요약:
#      [2026-03-17] Planning a birthday dinner — party of six; looking for outdoor seating


     0.00s  agent 발화 시작: Noah, welcome to Sydney. I’m Hunar, and I’m here to help you
     5.68s  agent 발화 끝
     5.93s  user  발화 시작: Hunar… that’s a beautiful name. I’m just… a bit overwhelmed,
    11.91s  agent 발화 시작: It’s perfectly natural to feel overwhelmed, Noah. Change can
    11.95s  user  발화 끝
    18.73s  agent 발화 끝
    19.26s  user  발화 시작: Um, I guess just… finding my routine. Back home, I knew wher
    26.72s  user  발화 끝
    27.14s  agent 발화 시작: That sense of familiarity is comforting, isn't it? Building 
    34.93s  user  발화 시작: Yeah, that— that actually sounds really good. Maybe just… a 
    35.03s  agent 발화 끝
    39.79s  user  발화 끝
