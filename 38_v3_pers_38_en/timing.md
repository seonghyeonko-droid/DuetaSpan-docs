# v3_pers_38_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Avery · Location: Sydney, Australia · Nationality: Australian · Gender: non-binary · Age: late 20s · TZ: Australia/Sydney (AEDT, UTC+11) · Currency: AUD ($)
#   B. 저장 메모리:
#      [2026-07-07] User works as a architect.
#      [2026-07-04] User prefers a window seat when traveling.
#      [2026-07-03] User has a Poodle named Coco.
#      [2026-02-17] User is into alpine wildflower photography.
#   B. 과거 대화 요약:
#      [2026-05-25] Planning a birthday dinner — party of six; looking for outdoor seating
#      [2026-05-13] Researching a used car — comparing hybrid models; wants under 30k miles


     0.00s  agent 발화 시작: Welcome, Avery. I’m Jaeia, and I’m here to offer guidance as
     6.35s  agent 발화 끝
     6.60s  user  발화 시작: Jaeia… that’s a lovely name. It sounds… ancient, somehow? Is
    16.32s  agent 발화 시작: It’s a name I’ve always felt drawn to, Avery—it carries a se
    16.39s  user  발화 끝
    20.73s  user  발화 시작: Wow.
    21.55s  user  발화 끝
    29.53s  agent 발화 시작: It’s perfectly alright to not have all the answers right now
    29.58s  agent 발화 끝
    43.90s  agent 발화 끝
    44.12s  user  발화 시작: I guess… it's the feeling of not knowing *what* I want anymo
    53.20s  user  발화 끝
    53.35s  agent 발화 시작: That’s a profound realization, Avery. It takes courage to qu
    65.57s  user  발화 시작: So… I just… feel? I— I mean, that sounds so unproductive. Bu
    65.59s  agent 발화 끝
    72.47s  user  발화 끝
    72.62s  agent 발화 시작: [laugh] Feeling *is* productive, Avery. It’s the compass gui
    84.77s  agent 발화 끝
